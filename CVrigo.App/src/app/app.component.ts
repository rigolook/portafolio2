import { Component } from '@angular/core';
import { PersonaM } from './Models/Persona';
import { PersonaService } from './Services/persona.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CVrigo.App';

  


  
}


//funciòn que carga las animaciones de las habilidades
// document.addEventListener("DOMContentLoaded", function () {
//   cargarAnimaciones();
// });

// function cargarAnimaciones(){
//   //Cargamos las animaciones de los trabajos
//   const items = document.getElementsByClassName("item");
//   for (let i = 0; i < items.length; i++) {
//       items[i].style.opacity = "0";
//   }

//   //Cargamos las animaciones de las habilidades
//   const habilidades = document.getElementsByClassName("chart");
//   for (let i = 0; i < habilidades.length; i++) {
//       habilidades[i].style.transform = "scale(0)";
//   }

//   //Cargamos las animaciones de los trabajos
//   $(document).ready(function () {
//       $(".item").each(function (i) {
//           $(this).delay(100 * i).animate({ opacity: 1 }, 1000);
//       });

//       //Cargamos las animaciones de las habilidades
//       cargarAnimacionesHabilidades();
//   });
// }

// function cargarAnimacionesHabilidades() {
//   $(document).ready(function () {
//       $(".chart").each(function (i) {
//           $(this).delay(100 * i).animate({ transform: "scale(1)" }, 2000);
//       });
//   });
// }

// //Función para filtrar las categorías de los trabajos
// function verCategoria(cat: string) {
//   const items = document.querySelectorAll(".item");
//   for (let i = 0; i < items.length; i++) {
//     if (items[i].tagName) {
//       items[i].style.opacity = "0";
//     }
//   }
// }

// function generator() {
//   throw new Error('Function not implemented.');
// }
//
