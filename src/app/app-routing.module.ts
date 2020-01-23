import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MadridComponentComponent } from './Componentes/madrid-component/madrid-component.component';
import { ToledoComponentComponent } from './Componentes/toledo-component/toledo-component.component';
import { ListadoComponentComponent } from './Componentes/listado-component/listado-component.component';
import { ConsultaComponentComponent } from './Componentes/consulta-component/consulta-component.component';


const routes: Routes = [
  {path:'madrid', component:MadridComponentComponent},
  {path:'toledo', component:ToledoComponentComponent},
  {path:'listado', component:ListadoComponentComponent},
  {path:'consulta',component:ConsultaComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
