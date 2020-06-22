import { Injectable } from '@angular/core';
import { MemoryManagerService } from './memory-manager.service';

@Injectable({
  providedIn: 'root'
})
export class BestFitService {

  constructor(
    public memoryManagerService: MemoryManagerService,
  ) { }

  ocupaMemoria(memorias, processo) {
    console.log(memorias)
    console.log(processo)
  }

}
