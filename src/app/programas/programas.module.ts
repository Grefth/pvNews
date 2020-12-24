import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramasComponent } from './programas/programas.component';



@NgModule({
  declarations: [ProgramasComponent],
  imports: [
    CommonModule
  ],
  exports: [ProgramasComponent]
})
export class ProgramasModule { }
