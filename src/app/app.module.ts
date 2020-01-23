import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultaComponentComponent } from './Componentes/consulta-component/consulta-component.component';
import { ListadoComponentComponent } from './Componentes/listado-component/listado-component.component';
import { ToledoComponentComponent } from './Componentes/toledo-component/toledo-component.component';
import { MadridComponentComponent } from './Componentes/madrid-component/madrid-component.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponentComponent,
    ListadoComponentComponent,
    ToledoComponentComponent,
    MadridComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
