import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-actualizar-persona',
  templateUrl: './actualizar-persona.component.html',
  styleUrls: ['./actualizar-persona.component.css'],
})
export class ActualizarPersonaComponent {
  id: number;
  persona: Persona = new Persona();
  constructor(
    private personaService: PersonaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personaService.obtenerPersonaPorId(this.id).subscribe(
      (dato) => {
        this.persona = dato;
      },
      (error) => console.log(error)
    );
  }

  irAlaListaDePersonas() {
    this.router.navigate(['/personas']);
  }

  onSubmit() {
    this.personaService.actualizarPersona(this.id, this.persona).subscribe(
      (dato) => {
        this.irAlaListaDePersonas();
      },
      (error) => console.log(error)
    );
  }
}
