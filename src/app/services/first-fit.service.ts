import { Injectable } from '@angular/core';
import { MemoryManagerService } from './memory-manager.service';
import { KernelService } from './kernel.service';


@Injectable({
  providedIn: 'root'
})
export class FirstFitService {

  constructor(
    public memoryManagerService: MemoryManagerService,
    public kernel: KernelService,
  ) { }

  memoriadoProcesso

  getProcesso(processo){
    this.memoriadoProcesso = processo
  }

  moveMemoria(index) {
    // this.memoryManagerService.memoria.forEach((elementMemoria) => {
      // if (!elementMemoria.blocoID) { // Separa o vetor que esteja vazio
        // console.log(elementMemoria);
        // (this.kernel.processo[0]).state = 'running';
        this.memoryManagerService.memoria.splice(index, 1, this.kernel.processo[0]); // adiciona o processo no nucleo da array do kernel
      // }
    // });
  }

  

  ocupaMemoria(memorias, processo) {
    console.log(memorias)
    console.log(processo)
  }

}
