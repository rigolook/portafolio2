import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiGatoComponent } from './paginas/api-gato/api-gato.component';
const routes: Routes = [
  {path: 'gato', component: ApiGatoComponent },
  {path:'apigato',component: ApiGatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
