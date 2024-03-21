import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'; //modulo para poder ser cliente en de parte de Angular

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiComponenteComponent } from './Components/mi-componente/mi-componente.component';
import { ApiGatoComponent } from './paginas/api-gato/api-gato.component';

@NgModule({
  declarations: [
    AppComponent,
    MiComponenteComponent,
    ApiGatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //importamos el modulo para utilizarlo de forma global en la app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
