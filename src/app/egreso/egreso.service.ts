import { Injectable } from '@angular/core';
import { Egreso } from './egreso.model';

@Injectable({
  providedIn: 'root',
})
export class EgresoService {
  egresos: Egreso[] = [
    new Egreso('Alquiler', 250000),
    new Egreso('Ropa', 170000),
  ];

  eliminar(egreso: Egreso): void {
    const index: number = this.egresos.indexOf(egreso);
    this.egresos.splice(index, 1);
  }
}
