import { Injectable } from '@angular/core';
import { Ingreso } from './ingreso.model';

@Injectable({
  providedIn: 'root',
})
export class IngresoService {
  ingresos: Ingreso[] = [
    new Ingreso('Salario', 1830000),
    new Ingreso('Venta Auto', 7500000),
  ];

  eliminar(ingreso: Ingreso): void {
    const index: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(index, 1);
  }
}
