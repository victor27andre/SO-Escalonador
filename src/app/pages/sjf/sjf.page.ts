import { Component, OnInit } from '@angular/core';
import { ProcessadorService } from 'src/app/services/processador.service';
import { MenuService } from 'src/app/services/menu.service';
import { KernelService } from 'src/app/services/kernel.service';
import { SchedulerService } from 'src/app/services/scheduler.service';

import { MemoryManagerService } from 'src/app/services/memory-manager.service';
import { BestFitService } from 'src/app/services/best-fit.service';
import { FirstFitService } from 'src/app/services/first-fit.service';



@Component({
  selector: 'app-sjf',
  templateUrl: './sjf.page.html',
  styleUrls: ['./sjf.page.scss'],
})
export class SjfPage implements OnInit {
time = 0;
interval;
play = false;

memoriaProcessosTotal=0



  constructor(
    public kernel: KernelService,
    public menuservice: MenuService,
    public processador: ProcessadorService,
    public schedulerService: SchedulerService,
    public memoryManagerService: MemoryManagerService,
    public bestFitService: BestFitService,
    public FirstFitService : FirstFitService

  ) { }

  ngOnInit() {
    this.kernel.generateProcess(this.menuservice.menu.numeroProcesso); // 10 - Starta os primeiros processos
    this.ordenarMenorMaior();
    this.processador.gerarCores(this.menuservice.menu.core); // 4 - Gera os nucleos
    
    this.memoryManagerService.gerarMemoriaTotal(this.menuservice.menu.total_memory); // 4 - Gera a memoria

    this.processador.gerarFilaProcessosFinalizados();
    
    this.schedulerService.moveProcess();
  }

  killMemoriaFila(processo) {
    // console.log(processo)
    this.memoryManagerService.killMemoria(processo); // mata memoria
  }

// procura o menor e ordena ou procura o menor na lista 
ordenarMenorMaior() {
    // console.log(this.kernel.processo);
    // console.log('ORDENANDO');
    // tslint:disable-next-line: only-arrow-functions
    this.kernel.processo.sort(function(a, b) {
      return a.total_time < b.total_time ? -1 : a.total_time > b.total_time ? 1 : 0;
    });
    
  }



  startTimer() {
    this.play = true;
    this.interval = setInterval(() => {
      this.time++;
      if ( this.kernel.processo.length !== 0) { // se a lista de processos nao estiver vazia entrar no if
        this.schedulerService.moveProcess();
      }
      this.processador.cores.forEach((elementProcessador, index) => {
        (this.processador.cores[index]).remaining_time++;
        if (elementProcessador.remaining_time === elementProcessador.total_time) {
          (this.processador.cores[index]).state = 'terminated';
          // console.log('terminou!!', this.processador.cores[index]);
          this.moveProcessoTerminated(this.processador.cores[index]);
          this.memoryManagerService.killMemoria(this.processador.cores[index]); 
          
          this.KillProcessCore(this.processador.cores[index]); // ja mata o processo e chama o moveProcess()
        }

        this.sumTamanhoUsado()
  
      });
     // (this.processador.cores[0]).remaining_time++; // incrementando no tempo corrido
    }, 1000);
    // console.log(this.processador.cores);
  }




  // mesma coisa do fifo

  pauseTimer() {
    this.play = false;
    clearInterval(this.interval);
  }

  sumTamanhoUsado(){
    let sum = 0
    // console.log(this.menuservice)
    // console.log(this.memoryManagerService.memoria)
    // console.log(this.processador.cores);
    for (var i = 0; i < this.menuservice.menu.core; i++) {      
      sum += this.processador.cores[i].tamanhoTotal;         
   }      
   this.memoriaProcessosTotal = sum   
  // console.log(this.memoriaProcessosTotal);    
  }

  moveProcessoTerminated(processFinish) {  
    // console.log('Movendo processo para finalizado', processFinish);
    this.processador.terminated.forEach((elementProcessador, index) => {
      // console.log(elementProcessador);
      if (!elementProcessador.process_id) { // Separa o vetor que esteja vazio
        this.processador.terminated.splice(index, 0, processFinish); // adiciona o processo no nucleo da array do kernel
        // this.kernel.processo.splice(0, 1); // retira o primeiro
      }
    });
  }

  KillProcessCore(index) {
    // console.log(index);
    this.kernel.killProcess(this.processador.cores.indexOf(index)); // indexOf puxa o valor do index na array
    this.schedulerService.moveProcess();
  }

   KillProcessFila(index) {
    // console.log(index);
    this.kernel.killProcessFila(this.kernel.processo.indexOf(index)); // indexOf puxa o valor do index na array
  }


  clickMoveFinishProcessCore(i) {
    if (i.process_id !== 0) {
      this.kernel.generateProcessVazio();
      // console.log('mudar o status ', i); // index da array q deseja excluir
      // console.log(i);
      // console.log('index: ', i.process_id, 'state', i.state);
      i.state = 'terminated';
      this.moveProcessoTerminated(i);
      this.KillProcessCore(i);
    }
  }
  
  
    cliclMoveFinishProcessFila(i) {
      this.kernel.generateProcessVazio();
      // console.log('Kill no processo de index: ', i); // index da array q deseja excluir
      i.state = 'terminated';
      this.moveProcessoTerminated(i);
      this.KillProcessFila(i);
    }
  
  

}
