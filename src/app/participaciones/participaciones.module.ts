import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipacionesComponent } from './participaciones/participaciones.component';



@NgModule({
  declarations: [ParticipacionesComponent],
  imports: [
    CommonModule
  ],
  exports: [ParticipacionesComponent]
})
export class ParticipacionesModule { }
