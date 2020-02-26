import { InputsPage } from './../pages/inputs/inputs.page';
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  inputsPage = InputsPage;
  

  constructor(public navCtrl: NavController) {


  }

}
