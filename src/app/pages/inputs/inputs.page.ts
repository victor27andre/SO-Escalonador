import { MenuService } from './../../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
// fazer o import do objeto menu



@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {


  formgroup: FormGroup
  numeroProcesso: any
  core:any
  escalonador: any
  memoria: any
  total_memory: any

  quantum = new FormControl(['',[Validators.required, Validators.max(20), Validators.min(2)]])
  number_quick_lists = new FormControl(['', Validators.required])
  minimum_amount_calls = new FormControl(['', Validators.required])



  constructor(
    private router: Router,
    public formbuilder: FormBuilder,
    public menuservice: MenuService
    ) {
      this.formgroup = formbuilder.group({
        numeroProcesso: ['', Validators.required],
        core: ['', [Validators.required, Validators.max(64), Validators.min(1)]],
        escalonador: ['', Validators.required],
        memoria: ['', Validators.required],
        total_memory: ['', Validators.required],
      });

      this.numeroProcesso = this.formgroup.controls['numeroProcesso'],
      this.core = this.formgroup.controls['core'],
      this.escalonador = this.formgroup.controls['escalonador'],
      this.memoria = this.formgroup.controls['memoria']
      this.total_memory = this.formgroup.controls['total_memory']
    }

  ngOnInit() {
  }


  switchEscalonador($event) {
    switch ($event.target.value) {
      case 'fifo': {
        this.escalonador = 'fifo';
        this.formgroup.removeControl('quantum');
        break;
      }
      case 'sjf': {
        this.escalonador = 'sjf';
        this.formgroup.removeControl('quantum');
        break;
      }
      case 'roundRobin': {
        this.escalonador = 'round-robin';
        this.formgroup.addControl('quantum', this.quantum);
        this.formgroup.addControl('quantum', this.quantum);
        break;
      }
      default: {
        this.escalonador = 'fifo';
        this.formgroup.removeControl('quantum');
        break;
      }
    }
  }

  switchMemoria($event){
    switch ($event.target.value) {
      case 'firstFit': {
        this.memoria = 'firstFit';
        this.formgroup.removeControl('number_quick_lists');
        this.formgroup.removeControl('minimum_amount_calls');

        break;
      }
      case 'quickFit': {
        this.memoria = 'quickFit';
        this.formgroup.addControl('number_quick_lists', this.number_quick_lists);
        this.formgroup.addControl('minimum_amount_calls', this.minimum_amount_calls);
        
        break;
      }
      case 'bestFit': {
        this.memoria = 'bestFit';
        this.formgroup.removeControl('number_quick_lists');
        this.formgroup.removeControl('minimum_amount_calls');
        break;
      }
      default: {
        this.memoria = 'mergeFit';
        this.formgroup.removeControl('number_quick_lists');
        this.formgroup.removeControl('minimum_amount_calls');
        break;
      }
    }
  }

  start() {
    // console.log(this.formgroup.value); // configuração setada
    this.menuservice.menu = this.formgroup.value;
    this.router.navigate([this.escalonador]);
  }

  teste() {
    console.log(this.formgroup.value);
  }



}
