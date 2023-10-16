import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GustosMusicalesComponent } from './gustos-musicales/gustos-musicales.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component';
import { FormsModule } from '@angular/forms';
import { ActualizarPersonaComponent } from './actualizar-persona/actualizar-persona.component';
import { DetallesPersonaComponent } from './detalles-persona/detalles-persona.component';

@NgModule({
  declarations: [
    AppComponent,
    GustosMusicalesComponent,
    RegistrarPersonaComponent,
    ActualizarPersonaComponent,
    DetallesPersonaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
