import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private baseURL = 'http://localhost:8080/api/v1/personas';

  constructor(private httpClient: HttpClient) {}

  obtenerListaDePersonas(): Observable<Persona[]> {
    return this.httpClient.get<Persona[]>(`${this.baseURL}`);
  }

  registrarPersona(persona: Persona): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, persona);
  }

  actualizarPersona(id: number, persona: Persona): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, persona);
  }

  obtenerPersonaPorId(id: number): Observable<Persona> {
    return this.httpClient.get<Persona>(`${this.baseURL}/${id}`);
  }

  eliminarPersona(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
