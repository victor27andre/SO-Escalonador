import { Injectable } from '@angular/core';
import { Process } from '../models/process';
import { MenuService } from './menu.service';

@Injectable({
  providedIn: 'root'
})
export class ProcessadorService {

  constructor(
    public menuservice: MenuService
  ) { }


  public cores: Process [] = [];

  gerarCores(quantidadeCores) {
    for (let i = 0; i < quantidadeCores; i++) {
      this.cores[i] = new Process();
    }
  }
}
