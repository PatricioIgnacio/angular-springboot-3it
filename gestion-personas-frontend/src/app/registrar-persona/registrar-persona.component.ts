import { Component } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-persona',
  templateUrl: './registrar-persona.component.html',
  styleUrls: ['./registrar-persona.component.css'],
})
export class RegistrarPersonaComponent {
  persona: Persona = new Persona();

  constructor(
    private personaServicio: PersonaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.persona);
  }

  guardarPersona() {
    this.personaServicio.registrarPersona(this.persona).subscribe(
      (dato) => {
        console.log(dato);
        this.irAListaDePersonas();
      },
      (error) => console.log(error)
    );
  }

  irAListaDePersonas() {
    this.router.navigate(['/personas']);
  }

  onSubmit() {
    this.guardarPersona();
  }
}
