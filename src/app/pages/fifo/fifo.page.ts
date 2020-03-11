import { FifoService } from './../../services/fifo.service';
import { Component, OnInit } from '@angular/core';
import { ProcessService } from 'src/app/services/process.service';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-fifo',
  templateUrl: './fifo.page.html',
  styleUrls: ['./fifo.page.scss'],
})
export class FifoPage implements OnInit {

  constructor(
    public fifoservice : FifoService,
    public processservice : ProcessService,
    public menuservice: MenuService
  ) { }

  ngOnInit() {
    console.log(this.menuservice.menu.numeroProcesso);
    
    // this.processservice.generateProcess()
  }

  print() {
    console.log(this.menuservice.menu.numeroProcesso);
  }

  

}
