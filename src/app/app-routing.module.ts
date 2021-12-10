import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleComponent } from './modules/detalle/detalle.component';
import { ResultadoComponent } from './modules/resultado/resultado.component';


const routes: Routes = [
  {path:'items',component:ResultadoComponent},
  {path:'items/:id',component:DetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
