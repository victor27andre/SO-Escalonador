import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RoundRobinPageRoutingModule } from './round-robin-routing.module';

import { RoundRobinPage } from './round-robin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RoundRobinPageRoutingModule
  ],
  declarations: [RoundRobinPage]
})
export class RoundRobinPageModule {}
