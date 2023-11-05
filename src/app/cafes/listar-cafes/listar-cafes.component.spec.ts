import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { ListarCafesComponent } from './listar-cafes.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { CafeService } from '../cafes.services';
import { of } from 'rxjs';
import { Cafe } from '../cafes';

describe('ListarCafesComponent', () => {
  let component: ListarCafesComponent;
  let fixture: ComponentFixture<ListarCafesComponent>;
  let cafeService: jest.Mocked<CafeService>;

  beforeEach(async () => {
    cafeService = {
      getCafes: jest.fn(),
    } as unknown as jest.Mocked<CafeService>;

    await TestBed.configureTestingModule({
      declarations: [ListarCafesComponent],
      providers: [{ provide: CafeService, useValue: cafeService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarCafesComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create a table with three rows plus the header', () => {
    const cafes: Cafe[] = [
      {
        id: 1,
        nombre: 'Cafe1',
        tipo: 'Blend',
        region: 'Valle del Cauca',
        sabor: 'Amargo',
        altura: 2000,
        imagen: 'https://google.com',
      },
      {
        id: 2,
        nombre: 'Cafe2',
        tipo: 'Café de Origen',
        region: 'Valle del Cauca',
        sabor: 'Amargo',
        altura: 2000,
        imagen: 'https://google.com',
      },
      {
        id: 3,
        nombre: 'Cafe3',
        tipo: 'Café de Origen',
        region: 'Cundinamarca',
        sabor: 'Amargo',
        altura: 2000,
        imagen: 'https://google.com',
      },
    ];

    cafeService.getCafes.mockReturnValue(of(cafes));

    fixture.detectChanges();

    const table = fixture.nativeElement.querySelector('tbody');
    const rows = table.querySelectorAll('tr');

    expect(rows.length).toBe(3);
    expect(fixture.componentInstance.cafes.length).toBe(3);
  });
});
