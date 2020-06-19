import { Injectable } from '@angular/core';
import { MenuService } from './menu.service';
import { memoryBlock } from '../models/memoryBlock';

@Injectable({
  providedIn: 'root'
})
export class MemoryManagerService {

  constructor(
    public menuservice: MenuService
  ) { }

  public memoria: memoryBlock [] = [];

  gerarMemoriaTotal(quantidadeCores) {
    for (let i = 0; i < quantidadeCores; i++) {
      this.memoria[i] = new memoryBlock();
    }
  }


  porcentMemoria(valorMaior,ValorMenor){
    var result = (ValorMenor/valorMaior)*100
    return result = parseFloat(result.toFixed(2));
  }


  // fazer um gerador de memoria


}
