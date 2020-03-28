import { Injectable } from '@angular/core';
import { ProcessadorService } from './processador.service';
import { KernelService } from './kernel.service';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  constructor(
    public kernel: KernelService,
    public processador: ProcessadorService
  ) { }

  moveProcess() {
    // console.log('Movendo processo');
    this.processador.cores.forEach((elementProcessador, index) => {
      if (!elementProcessador.process_id) { // Separa o vetor que esteja vazio
        (this.kernel.processo[0]).state = 'running';
        this.processador.cores.splice(index, 1, this.kernel.processo[0]); // adiciona o processo no nucleo da array do kernel
        this.kernel.processo.splice(0, 1); // retira o primeiro
      }
    });
  }
}
