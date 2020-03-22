import { FifoService } from './../../services/fifo.service';
import { Component, OnInit } from '@angular/core';
import { KernelService } from 'src/app/services/kernel.service';
import { MenuService } from 'src/app/services/menu.service';
import { ProcessadorService } from 'src/app/services/processador.service';

@Component({
  selector: 'app-fifo',
  templateUrl: './fifo.page.html',
  styleUrls: ['./fifo.page.scss'],
})
export class FifoPage implements OnInit {


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
    console.log(this.processador.cores);
    console.log(this.kernel.processo);
    this.moveProcess();
    console.log(this.processador.cores);
    console.log(this.kernel.processo);
  }

  // Movendo processos
  moveProcess() {
    console.log('Movendo processo');
    this.processador.cores.forEach((elementProcessador, index) => {
      if (!elementProcessador.process_id) { // Separa o vetor que esteja vazio
        // this.processador.cores.splice(index) ; // nesse caso ele esta apagando, nesse caso deve jogar os processos para os cores
        this.processador.cores.splice(index, 1, this.kernel.processo[0]); // adiciona o processo no nucleo da array do kernel
        this.kernel.processo.splice(0, 1); // retira o primeiro
      }
    });
    // console.log(this.kernel.processo);
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
  }


}
