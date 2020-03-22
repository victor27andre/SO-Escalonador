import { MenuService } from './menu.service';
import { Injectable } from '@angular/core';
import { FifoService } from './fifo.service';

import { Process } from '../models/process';
import { ProcessadorService } from './processador.service';

@Injectable({
  providedIn: 'root'
})
export class KernelService {

  processo = [];
  coreVazio = [];

  constructor(
    public menuservice: MenuService,
    public processador: ProcessadorService,
  ) { }

  // Criar os processos
  generateProcess(numeroProcess) {
    // console.log(this.menuservice.menu.numeroProcesso); // numero de processos que vai ser criado
    for (let i = 1; i <= numeroProcess; i++) {
      this.processo.push({ // incrementa array
        process_id: i,
        total_time: Math.floor(Math.random() * (20) + 1), // cria o processo randomicamente de 1 a 20
        state: 'ready' ,
        remaining_time: 0 // recebe 0, pois ainda nao esta processando.
      });
      // console.log(this.processo);
    }
  }

  // Cria core Vazio
  generateProcessVazio() {
        this.coreVazio.push({ // incrementa array
        process_id: 0,
        total_time: 20, // cria o processo randomicamente de 1 a 20
        state: '' ,
        remaining_time: 0 // recebe 0, pois ainda nao esta processando.
      });
  }


  // state: estado do processo: "ready", "running" ou "terminated".
  killProcess(i) {
    this.generateProcessVazio();
    console.log('Kill no processo de index: ', i);
    this.processador.cores.splice(i, 1, this.coreVazio[0]);
  }
  killProcessFila(i) {
    this.generateProcessVazio();
    console.log('Kill no processo de index: ', i);
    this.processo.splice(i, 1);
  }

}

