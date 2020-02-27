import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoundRobinPage } from './round-robin.page';

const routes: Routes = [
  {
    path: '',
    component: RoundRobinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoundRobinPageRoutingModule {}
