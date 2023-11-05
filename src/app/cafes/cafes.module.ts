import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarCafesComponent } from './listar-cafes/listar-cafes.component';



@NgModule({
  declarations: [ListarCafesComponent],
  exports: [ListarCafesComponent],
  imports: [CommonModule],
})
export class CafesModule {}
