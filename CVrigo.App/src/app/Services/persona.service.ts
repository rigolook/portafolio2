import { Injectable } from '@angular/core';
import { PersonaM } from '../Models/Persona';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url="persona";

  private apikey = "TU_API_KEY";
  constructor(private http: HttpClient) { }


  getRandomCat():Observable<any>{
    return this.http.get<any>('https://api.thecatapi.com/v1/images/search',{
      headers:{
        'x-api-key':this.apikey
      }
    });
  }
  



  public getPersonas():Observable<PersonaM[]>{
  return this.http.get<PersonaM[]>(`${environment.apiUrl}/${this.url}`)
  };








}
