import { FifoService } from './../../services/fifo.service';
import { Component, OnInit } from '@angular/core';
import { KernelService } from 'src/app/services/kernel.service';
import { MenuService } from 'src/app/services/menu.service';
import { ProcessadorService } from 'src/app/services/processador.service';
import { Process } from 'src/app/models/process';

@Component({
  selector: 'app-fifo',
  templateUrl: './fifo.page.html',
  styleUrls: ['./fifo.page.scss'],
})
export class FifoPage implements OnInit {


time = 0;
interval;
play = false;

public terminated: Process [] = [];




  constructor(
    public fifoservice: FifoService,
    public kernel: KernelService,
    public menuservice: MenuService,
    public processador: ProcessadorService,

  ) { }

  // this.kernel.processo = array de processos
  // this.processador.cores = array de nucleos nucleos

  ngOnInit() {
    // console.log(this.menuservice.menu); // mostra as opçoes do menu
    this.kernel.generateProcess(this.menuservice.menu.numeroProcesso); // 10 - Starta os primeiros processos
    this.processador.gerarCores(this.menuservice.menu.core); // 4 - Gera os nucleos
    // console.log(this.processador.cores);
    // console.log(this.kernel.processo);
    this.moveProcess();
    // console.log(this.processador.cores);
    // console.log(this.kernel.processo);
  }

  // Movendo processos
  moveProcess() {
    console.log('Movendo processo');
    this.processador.cores.forEach((elementProcessador, index) => {
      if (!elementProcessador.process_id) { // Separa o vetor que esteja vazio
        (this.kernel.processo[0]).state = 'running';
        this.processador.cores.splice(index, 1, this.kernel.processo[0]); // adiciona o processo no nucleo da array do kernel
        this.kernel.processo.splice(0, 1); // retira o primeiro
      }
    });
  }

  KillProcessCore(index) {
    console.log(index);
    this.kernel.killProcess(this.processador.cores.indexOf(index)); // indexOf puxa o valor do index na array
    this.moveProcess();
  }

  KillProcessFila(index) {
    console.log(index);
    this.kernel.killProcessFila(this.processador.cores.indexOf(index)); // indexOf puxa o valor do index na array
  }

  print() {
    // console.log('PRINT');
    // console.log(this.processador.cores);
    // console.log(this.kernel.processo);
    // this.kernel.killProcess(this.processador.cores.indexOf(this.processador.cores[1])); // indexOf puxa o valor do index na array
    // console.log(this.processador.cores);
    // console.log(this.kernel.processo);
    // this.moveProcess();
    // console.log(this.processador.cores);
    // console.log(this.kernel.processo);
    ///////////////////////////////////////
    console.log(this.terminated);
  }

startTimer() {
  this.play = true;
  this.interval = setInterval(() => {
    this.time++;
    this.processador.cores.forEach((elementProcessador, index) => {
      (this.processador.cores[index]).remaining_time++;
      if (elementProcessador.remaining_time === elementProcessador.total_time) {
        (this.processador.cores[index]).state = 'terminated';
      }
      if ((this.processador.cores[index]).state === 'terminated') {
        console.log('terminou!!', this.processador.cores[index]);
        this.moveProcessoTerminated(this.processador.cores[index]);
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

moveProcessoTerminated(processFinish) {
  console.log('Movendo processo', processFinish);
  this.terminated.forEach((elementProcessador, index) => {
    console.log('entra aqui??!', elementProcessador);
    if (!elementProcessador) { // Separa o vetor que esteja vazio
      console.log('entra aqui??!');
      this.terminated.splice(index, 0, processFinish); // adiciona o processo no nucleo da array do kernel
      console.log(this.terminated);
      // this.kernel.processo.splice(0, 1); // retira o primeiro
    }
  });
}





}
