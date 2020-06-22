import { Injectable } from '@angular/core';
import { MenuService } from './menu.service';
import { memoryBlock } from '../models/memoryBlock';
import { KernelService } from './kernel.service';

@Injectable({
  providedIn: 'root'
})
export class MemoryManagerService {

  memoriaVazia = []

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
    this.generateMemoriaVazia();
    // console.log(processo.process_id);
    // console.log(this.memoria);
    for(let index = 0; index < this.menuservice.menu.total_memory; index++){
      if(processo.process_id === (this.memoria[index]).blocoID){
        console.log((this.memoria[index]))
        // console.log(processo.process_id)
        // this.memoria[index] = this.memoriaVazia;
        this.memoria.splice(index, 1, this.memoriaVazia[0]);
      }
    }
    
    //vai percorrer onde array, e onde core[i].ID === memoria[i]ID,
    // ira colocar memoria vazia

    
    // this.memoria.splice(i, 1, this.generateMemoriaVazia[0]);
  }

  generateMemoriaVazia() {
    this.memoriaVazia.push({ // incrementa array
    process_id: null,
    total_time: null, // cria o processo randomicamente de 1 a 20
    state: 'empty' ,
    remaining_time: null, // recebe 0, pois ainda nao esta processando.
    // memoria
    blocoID: null,
    tamanhoTotal: null,
  });
}



}
