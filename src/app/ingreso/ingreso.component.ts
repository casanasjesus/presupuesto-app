import { Component } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingreso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ingreso.component.html',
})
export class IngresoComponent {
  ingresos: Ingreso[] = [];

  constructor(private readonly ingresoService: IngresoService) {
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarIngreso(ingreso: Ingreso): void {
    this.ingresoService.eliminar(ingreso);
  }
}
