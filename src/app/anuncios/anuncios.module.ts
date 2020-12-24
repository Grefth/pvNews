import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnunciosComponent } from './anuncios/anuncios.component';



@NgModule({
  declarations: [ AnunciosComponent],
  imports: [
    CommonModule
  ],
  exports: [ AnunciosComponent]
})
export class AnunciosModule { }
