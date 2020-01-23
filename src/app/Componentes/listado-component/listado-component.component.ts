import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/Servicios/servicio.service';
import { Dato } from 'src/app/Interfaces/dato';

@Component({
  selector: 'app-listado-component',
  templateUrl: './listado-component.component.html',
  styleUrls: ['./listado-component.component.css']
})
export class ListadoComponentComponent implements OnInit {
  dato:Dato;
  empleados=null;

  constructor(private es: ServicioService) { 
    
  }

  verListadoCompleto(){
    this.es.getListadoCompleto()
    .subscribe(dato2=>{this.dato=dato2
      this.empleados=this.dato.data});
  }

  ngOnInit() {
    this.verListadoCompleto();
  }

}
