import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inputs', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'inputs',
    loadChildren: () => import('./pages/inputs/inputs.module').then( m => m.InputsPageModule)
  },
  {
    path: 'fifo',
    loadChildren: () => import('./pages/fifo/fifo.module').then( m => m.FifoPageModule)
  },
  {
    path: 'sjf',
    loadChildren: () => import('./pages/sjf/sjf.module').then( m => m.SjfPageModule)
  },
  {
    path: 'round-robin',
    loadChildren: () => import('./pages/round-robin/round-robin.module').then( m => m.RoundRobinPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
