import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-gustos-musicales',
  templateUrl: './gustos-musicales.component.html',
  styleUrls: ['./gustos-musicales.component.css'],
})
export class GustosMusicalesComponent {
  personas: Persona[];

  constructor(
    private personaServicio: PersonaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerPersonas();
  }

  actualizarPersona(id: number) {
    this.router.navigate(['actualizar-persona', id]);
  }

  eliminarPersona(id: number) {
    swal({
      title: '¿Estas seguro?',
      text: 'Confirma si deseas eliminar persona',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    }).then((result) => {
      if (result.value) {
        this.personaServicio.eliminarPersona(id).subscribe((dato) => {
          console.log(dato);
          this.obtenerPersonas();
          swal(
            'Persona eliminada',
            'La persona a sido eliminada con éxito',
            'success'
          );
        });
      }
    });
  }

  verDetallesDePersona(id: number) {
    this.router.navigate(['detalles-persona', id]);
  }

  private obtenerPersonas() {
    this.personaServicio.obtenerListaDePersonas().subscribe((dato) => {
      this.personas = dato;
    });
  }
}
