import { Injectable } from '@angular/core';
import { MenuService } from './menu.service';
import { memoryBlock } from '../models/memoryBlock';
import { KernelService } from './kernel.service';

@Injectable({
  providedIn: 'root'
})
export class MemoryManagerService {

  memoriaVazia = []
  auxTamanho

  constructor(
    public menuservice: MenuService,
    public kernel: KernelService,

  ) { }

  public memoria: memoryBlock [] = [];

  gerarMemoriaTotal(quantidadeMemoria) {
    for (let i = 0; i < quantidadeMemoria; i++) {
      this.memoria[i] = new memoryBlock();
    }
  }


  porcentMemoria(valorMaior,ValorMenor){
    var result = (ValorMenor/valorMaior)*100
    return result = parseFloat(result.toFixed(2));
  }

  killMemoria(processo) {
    this.generateMemoriaVazia(processo);
    // console.log(processo.process_id);
    // console.log(this.memoria);
    for(let index = 0; index < this.menuservice.menu.total_memory; index++){
      if(processo.process_id === (this.memoria[index]).blocoID){
        this.memoria.splice(index, 1, this.memoriaVazia[0]);
      }
    }
    this.memoriaVazia.splice(0, 1);

  }


  generateMemoriaVazia(processo) {
    // console.log(processo.tamanhoTotal)
    this.auxTamanho = processo.tamanhoTotal

    this.memoriaVazia.push({ // incrementa array
    process_id: null,
    total_time: null, // cria o processo randomicamente de 1 a 20
    state: 'empty' ,
    remaining_time: null, // recebe 0, pois ainda nao esta processando.
    // memoria
    blocoID: 'vazio',
    tamanhoTotal: this.auxTamanho,
  });


}
}
