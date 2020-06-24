import { Injectable } from '@angular/core';
import { MemoryManagerService } from './memory-manager.service';

@Injectable({
  providedIn: 'root'
})
export class BestFitService {

  constructor(
    public memoryManagerService: MemoryManagerService,
  ) { }

  mainBestFit() {
    console.log()
    console.log()
  }

}
