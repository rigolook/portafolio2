import { Component } from '@angular/core';
import { PersonaM } from '../../Models/Persona';
import { PersonaService } from '../../Services/persona.service';

@Component({
  selector: 'app-mi-componente',
  templateUrl: './mi-componente.component.html',
  styleUrl: './mi-componente.component.css'
})
export class MiComponenteComponent {

  persona:PersonaM[]=[];

  constructor(private personaService: PersonaService){}

  ngOnInit():void{
   this.personaService.getPersonas().subscribe((result: PersonaM[]) =>(this.persona=result));
   console.log(this.persona);
  }

  seleccion: string = "";

  seleccionDeTrabajos(parameter:string):void{
    this.seleccion = parameter;
    switch(this.seleccion){
      case "Todos":{
        var cambioDeBorde = document.getElementById("item")
        cambioDeBorde?.classList.add("borde");
        break;
      }
      case "Diseño":{
        var cambioDeBorde = document.getElementById("disenio")
        cambioDeBorde?.classList.add("borde");
        console.log("hola Dising")
        break;
        
      }
      case "Programación":{
        var cambioDeBorde = document.getElementById("programacion")
        cambioDeBorde?.classList.add("borde");
        console.log("hola Prog")
        break;
      }
      case "API":{
        var cambioDeBorde = document.getElementById("animaciones")
        cambioDeBorde?.classList.add("borde");
        console.log("hola Mundo")
        break;
      }
    }
  }
}
