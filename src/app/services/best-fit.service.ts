import { Injectable } from '@angular/core';
import { MemoryManagerService } from './memory-manager.service';
import { KernelService } from './kernel.service';

@Injectable({
  providedIn: 'root'
})
export class BestFitService {

  somaIndice
  indexMemoriAux = 0
  x
  indexNulo
  achou
  limiteRodar

  constructor(
    public memoryManagerService: MemoryManagerService,
    public kernel: KernelService,
    ) { }

    encontraMelhorPosicao(processo){
      this.achou= false
      this.limiteRodar = processo.tamanhoTotal
      this.memoryManagerService.memoria.forEach((elementMemoria, index) => {
        if(elementMemoria.blocoID == 'vazio' && processo.tamanhoTotal === elementMemoria.tamanhoTotal && this.limiteRodar > 0){
          // console.log('bloco: ', elementMemoria, 'index: ' ,index);
          
          this.memoryManagerService.memoria.splice(index, 1, this.kernel.processo[0]);
          this.limiteRodar --
          this.achou= true
        }
      })
      this.blocoNovo(processo, this.achou)
    }
  
    blocoNovo(processo, naoachou){
      if(!naoachou) {
        this.indexNulo = this.memoryManagerService.memoria.indexOf(this.memoryManagerService.memoria.find((element) => element.blocoID ===null))
        // console.log(this.indexNulo) 
        this.x = this.indexNulo + processo.tamanhoTotal
        for (let index = this.indexNulo; index < this.x; index++) {
          
          this.memoryManagerService.memoria.splice(index, 1, this.kernel.processo[0]); // adiciona o processo na memoria
  
        }
      }
  
      } 
}
