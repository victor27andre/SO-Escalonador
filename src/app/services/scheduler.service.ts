import { Injectable } from '@angular/core';
import { ProcessadorService } from './processador.service';
import { KernelService } from './kernel.service';
import { MemoryManagerService } from './memory-manager.service';
import { FirstFitService } from './first-fit.service';
import { element } from 'protractor';
import { MenuService } from './menu.service';
import { BestFitService } from './best-fit.service';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  constructor(
    public kernel: KernelService,
    public processador: ProcessadorService,
    public memoryManagerService: MemoryManagerService,
    public bestFitService : BestFitService,
    public firstFitService : FirstFitService,
    public menuservice : MenuService,
  ) { }
  
  indexMemoriAux = 0; 
  aux = 0

  flagStart= true
  totalSum = 0

  moveProcess() {
    // console.log(this.menuservice.menu.memoria)
    // console.log('Movendo processo');
    this.processador.cores.forEach((elementProcessador, index) => {
      if (!elementProcessador.process_id) { // Separa o vetor que esteja vazio
        (this.kernel.processo[0]).state = 'running';
        this.processador.cores.splice(index, 1, this.kernel.processo[0]); // adiciona o processo no nucleo da array do kernel
        //case FirstFit esta recebendo o indice, posso fazer esse indice apontar para outro lugfar onde esteja vazio, usando if
        // this.distribuirMemoriaNoVetor(this.kernel.processo[0])
        this.moveProcessMemoria(this.kernel.processo[0])
        
        
        // this.FirstFitService.moveMemoria(this.indexMemoriAux)
        
        this.kernel.processo.splice(0, 1); // retira o primeiro
      }
    });
  }

  // funcao carregada de pegar um numero
  // e sair colocando essa em um vetor, para
  // ocupar o espaço 
  moveProcessMemoria(processo) {
    // chama o algoritmo FirstFit

    switch (this.menuservice.menu.memoria) {
      case 'firstFit':
        this.firstFitService.encontraMelhorPosicao(processo)
      break;
      case 'bestFit':
        this.bestFitService.encontraMelhorPosicao(processo)
      break;
    
      default:
        break;
    }

    // this.bestFitService.encontraMelhorPosicao(processo)
    // vai contar se tem espaço para anexar o processo novo
    // se tiver ele retorna novo indice para anexar, se nao, segue o jogo
    
    // this.somaIndice = this.indexMemoriAux + processo.tamanhoTotal
    // if(this.flagStart){
      
    //   for(let index = this.indexMemoriAux; index <= this.FirstFitService.somaIndice; index++){
    //     this.memoryManagerService.memoria.splice(index, 1, this.kernel.processo[0]); // adiciona o processo na memoria
    //     this.indexMemoriAux = index;
    //   }  
    //     // this.menuservice.menu
    // }  
  } 


}

