import { Component } from '@angular/core';
import { CafeService } from '../cafes.services';
import { Cafe } from '../cafes';

@Component({
  selector: 'app-listar-cafes',
  templateUrl: './listar-cafes.component.html',
})
export class ListarCafesComponent {
  cafes: Cafe[] = [];
  origenCount: number = 0;
  blendCount: number = 0;

  constructor(private cafeService: CafeService) {}

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes = cafes;

      this.origenCount = this.cafes.filter(
        (cafe) => cafe.tipo === 'Café de Origen',
      ).length;
      this.blendCount = this.cafes.filter(
        (cafe) => cafe.tipo === 'Blend',
      ).length;
    });
  }
}
