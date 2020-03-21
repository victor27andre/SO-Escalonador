import { MenuService } from './menu.service';
import { Injectable } from '@angular/core';
import { FifoService } from './fifo.service';

import { Process } from '../models/process';

@Injectable({
  providedIn: 'root'
})
export class KernelService {

  processo = [];

  constructor(
    public menuservice: MenuService
  ) { }

  // Criar os processos
  generateProcess(numeroProcess) {
    console.log(this.menuservice.menu.numeroProcesso);
    for (let i = 0; i < numeroProcess; i++) {
      this.processo.push({ // incrementa array
        process_id: i,
        total_time: Math.floor(Math.random() * (20) + 1), // cria o processo randomicamente de 1 a 20
        state: 'ready' ,
        remaining_time: 0 // recebe 0, pois ainda nao esta processando.
      });
      // console.log(this.processo);
    }
  }
}

