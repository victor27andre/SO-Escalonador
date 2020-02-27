import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SjfPageRoutingModule } from './sjf-routing.module';

import { SjfPage } from './sjf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SjfPageRoutingModule
  ],
  declarations: [SjfPage]
})
export class SjfPageModule {}
