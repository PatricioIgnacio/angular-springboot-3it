import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-detalles-persona',
  templateUrl: './detalles-persona.component.html',
  styleUrls: ['./detalles-persona.component.css'],
})
export class DetallesPersonaComponent {
  id: number;
  persona: Persona;

  constructor(
    private route: ActivatedRoute,
    private personaServicio: PersonaService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.persona = new Persona();
    this.personaServicio.obtenerPersonaPorId(this.id).subscribe((dato) => {
      this.persona = dato;
    });
  }
}
