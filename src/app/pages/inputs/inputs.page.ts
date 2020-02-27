import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {

  escalonamento = "fifo";

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  switchEscalonamento($event){
    switch ($event.target.value) {
      case 'fifo': {
        this.escalonamento = 'fifo'
        break;
      }
      case 'sjf': {
        this.escalonamento = 'sjf'
        break;
      }
      case 'roundRobin': {
        this.escalonamento = 'round-robin'
        break;
      }
      default: {
        this.escalonamento = 'fifo'
        break;
      }
    }
  }

  start() {
    this.router.navigate([this.escalonamento])
  }
  



}
