import { Component, OnInit } from '@angular/core';
import { KernelService } from 'src/app/services/kernel.service';
import { MenuService } from 'src/app/services/menu.service';
import { SchedulerService } from 'src/app/services/scheduler.service';
import { ProcessadorService } from 'src/app/services/processador.service';

@Component({
  selector: 'app-round-robin',
  templateUrl: './round-robin.page.html',
  styleUrls: ['./round-robin.page.scss'],
})
export class RoundRobinPage implements OnInit {

time = 0;
interval;
play = false;



  constructor(
    public kernel: KernelService,
    public menuservice: MenuService,
    public processador: ProcessadorService,
    public schedulerService: SchedulerService
  ) { }

  quantum = this.menuservice.menu.quantum;


  ngOnInit() {
    console.log(this.menuservice); // esta indo com quantum
    // console.log(this.menuservice.menu); // mostra as opçoes do menu
    this.kernel.generateProcessRB(this.menuservice.menu.numeroProcesso); // 10 - Starta os primeiros processos
    this.processador.gerarCores(this.menuservice.menu.core); // 4 - Gera os nucleos
    this.processador.gerarFilaProcessosFinalizados();
    // console.log(this.processador.cores);
    // console.log(this.kernel.processo);
    this.schedulerService.moveProcess();
    // console.log(this.processador.cores);
    // console.log(this.kernel.processo);
  }



  // TIME RB
  startTimerRB() {
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
          this.KillProcessCore(this.processador.cores[index]); // ja mata o processo e chama o moveProcess()
        }
  
      });
     // (this.processador.cores[0]).remaining_time++; // incrementando no tempo corrido
    }, 1000);
    // console.log(this.processador.cores);
  }
  
  pauseTimer() {
    this.play = false;
    clearInterval(this.interval);
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
        (this.processador.cores[index]).quantum++;
        if (elementProcessador.remaining_time === elementProcessador.total_time) {
          (this.processador.cores[index]).state = 'terminated';
          // console.log('terminou!!', this.processador.cores[index]);
          this.moveProcessoTerminated(this.processador.cores[index]);
          this.KillProcessCore(this.processador.cores[index]); // ja mata o processo e chama o moveProcess()
        } else if (elementProcessador.quantum === this.quantum) {
          console.log('vai fazer algo, como voltar paa lista de processos');
          (this.processador.cores[index]).quantum = 0;
          this.kernel.processo.push(this.processador.cores[index]);
          this.KillProcessCore(this.processador.cores[index])

        }
      });
     // (this.processador.cores[0]).remaining_time++; // incrementando no tempo corrido
    }, 1000);
    // console.log(this.processador.cores);
  }

  moveReturn() {

  }












  moveProcessoTerminated(processFinish) {  
    console.log('Movendo processo para finalizado', processFinish);
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

    print() {
      console.log('mano do ceu');
      console.log(this.processador.cores);
      console.log(this.kernel.processo);
    }

  






}


