import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GustosMusicalesComponent } from './gustos-musicales/gustos-musicales.component';
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component';
import { ActualizarPersonaComponent } from './actualizar-persona/actualizar-persona.component';
import { DetallesPersonaComponent } from './detalles-persona/detalles-persona.component';

const routes: Routes = [
  { path: 'personas', component: GustosMusicalesComponent },
  { path: '', redirectTo: 'personas', pathMatch: 'full' },
  { path: 'registrar-persona', component: RegistrarPersonaComponent },
  { path: 'actualizar-persona/:id', component: ActualizarPersonaComponent },
  { path: 'detalles-persona', component: DetallesPersonaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
