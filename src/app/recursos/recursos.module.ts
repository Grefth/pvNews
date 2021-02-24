import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecursosComponent } from './recursos/recursos.component';



@NgModule({
  declarations: [RecursosComponent],
  imports: [
    CommonModule
  ],
  exports: [RecursosComponent]
})
export class RecursosModule { }
