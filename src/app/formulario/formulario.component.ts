import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IngresoService } from '../ingreso/ingreso.service';
import { EgresoService } from '../egreso/egreso.service';
import { Ingreso } from '../ingreso/ingreso.model';
import { Egreso } from '../egreso/egreso.model';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.component.html',
})
export class FormularioComponent {
  tipo: string = 'ingresoOperacion';
  descripcionInput: string | null = null;
  valorInput: number | null = null;

  constructor(
    private readonly ingresoService: IngresoService,
    private readonly egresoService: EgresoService
  ) {}

  tipoOperacion(evento: Event) {
    const elementoSelect = evento?.target as HTMLSelectElement;
    this.tipo = elementoSelect.value;
  }

  agregarRegistro() {
    if (this.descripcionInput !== null && this.valorInput !== null) {
      if (this.tipo === 'ingresoOperacion') {
        this.ingresoService.ingresos.push(
          new Ingreso(this.descripcionInput, this.valorInput)
        );
      }

      if (this.tipo === 'egresoOperacion') {
        this.egresoService.egresos.push(
          new Egreso(this.descripcionInput, this.valorInput)
        );
      }

      this.descripcionInput = null;
      this.valorInput = null;
    }
  }

  datosIvalidos() {
    alert('Debe introducir valores en descripción y valor');
  }
}
