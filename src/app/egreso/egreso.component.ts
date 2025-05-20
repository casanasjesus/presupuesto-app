import { Component, Input } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-egreso',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './egreso.component.html',
})
export class EgresoComponent {
  egresos: Egreso[] = [];
  @Input() ingresoTotal!: number;

  constructor(private readonly egresoService: EgresoService) {
    this.egresos = this.egresoService.egresos;
  }

  getPorcentajeEgreso(egreso: Egreso): number {
    return egreso.valor / this.ingresoTotal;
  }

  eliminarEgreso(egreso: Egreso): void {
    this.egresoService.eliminar(egreso);
  }
}
