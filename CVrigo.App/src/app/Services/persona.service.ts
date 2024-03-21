import { Injectable } from '@angular/core';
import { PersonaM } from '../Models/Persona';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url="Persona";

  constructor(private http: HttpClient) { }

  public getPersonas():Observable<PersonaM[]>{
  return this.http.get<PersonaM[]>(`${environment.apiUrl}/${this.url}`)
  };
}
