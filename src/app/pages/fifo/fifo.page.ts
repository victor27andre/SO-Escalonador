import { FifoService } from './../../services/fifo.service';
import { Component, OnInit } from '@angular/core';
import { KernelService } from 'src/app/services/kernel.service';
import { MenuService } from 'src/app/services/menu.service';
import { ProcessadorService } from 'src/app/services/processador.service';

@Component({
  selector: 'app-fifo',
  templateUrl: './fifo.page.html',
  styleUrls: ['./fifo.page.scss'],
})
export class FifoPage implements OnInit {

  constructor(
    public fifoservice: FifoService,
    public kernel: KernelService,
    public menuservice: MenuService,
    public processador: ProcessadorService,
    
  ) { }

  ngOnInit() {
    console.log(this.menuservice.menu);
    this.kernel.generateProcess(this.menuservice.menu.numeroProcesso); // Starta os primeiros processos
    this.processador.gerarCores(this.menuservice.menu.core);
  }

  print() {
    console.log(this.kernel.processo);
    console.log(this.menuservice.menu.core);
    console.log(this.processador.cores);
  }


}
