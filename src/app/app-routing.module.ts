import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnunciosComponent } from './anuncios/anuncios/anuncios.component';
import { ParticipacionesComponent } from './participaciones/participaciones/participaciones.component';
import { RecursosComponent } from './recursos/recursos/recursos.component';

const routes: Routes = [
  {
    path: '',
    component: AnunciosComponent,
  },
  {
    path:'anuncios',
    component:AnunciosComponent
  },
  {
    path:'participaciones',
    component:ParticipacionesComponent
  },
  {
    path:'recursos',
    component:RecursosComponent
  },
  {
    path:'**',
    redirectTo:'Anuncios',
    pathMatch:'full'
  }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
