import { MenuService } from './../../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';
// fazer o import do objeto menu
import { MenuModelModule } from '../../modules/menu-model/menu-model.module';
import { FifoService } from '../../services/fifo.service'




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

  quantum = new FormControl(['',[Validators.required, Validators.max(20), Validators.min(2)]])

  

  constructor(
    private router : Router,
    public formbuilder: FormBuilder,
    public menuservice : MenuService
    )
    {
      this.formgroup = formbuilder.group({
        numeroProcesso: ['',Validators.required],
        core: ['',[Validators.required, Validators.max(64), Validators.min(1)]],
        escalonador: ['',Validators.required],
      })

      this.numeroProcesso = this.formgroup.controls['numeroProcesso'],
      this.core = this.formgroup.controls['core']
      this.escalonador = this.formgroup.controls['escalonador']
    }

  ngOnInit() {
  }
  

  switchEscalonador($event){
    switch ($event.target.value) {
      case 'fifo': {
        this.escalonador = 'fifo'
        this.formgroup.removeControl('quantum')
        break;
      }
      case 'sjf': {
        this.escalonador = 'sjf'
        this.formgroup.removeControl('quantum')
        break;
      }
      case 'roundRobin': {
        this.escalonador = 'round-robin'
        this.formgroup.addControl('quantum',this.quantum)
        break;
      }
      default: {
        this.escalonador = 'fifo'
        this.formgroup.removeControl('quantum')
        break;
      }
    }
  }

  start() {
    console.log(this.formgroup.value)
    this.menuservice.menu = this.formgroup.value
    this.router.navigate([this.escalonador])
  }
  
  processForm(menuForm) {
    console.log('mano do ceu');
  }



}
