import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FifoPageRoutingModule } from './fifo-routing.module';

import { FifoPage } from './fifo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FifoPageRoutingModule
  ],
  declarations: [FifoPage]
})
export class FifoPageModule {}
