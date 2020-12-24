import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnunciosComponent } from './anuncios/anuncios/anuncios.component';
import { ProgramasComponent } from './programas/programas/programas.component'
import { ParticipacionesComponent } from './participaciones/participaciones/participaciones.component';

const routes: Routes = [
  {
    path: '',
    component: AnunciosComponent,
  },
  {
    path:'programas',
    component:ProgramasComponent
  },
  {
    path:'anuncios',
    component:AnunciosComponent
  },
  {
    path:'participaciones',
    component:ParticipacionesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
