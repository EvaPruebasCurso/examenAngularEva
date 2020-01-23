import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/Interfaces/empleado';
import { ServicioService } from 'src/app/Servicios/servicio.service';
import { Dato } from 'src/app/Interfaces/dato';
import { parse } from 'querystring';

@Component({
  selector: 'app-consulta-component',
  templateUrl: './consulta-component.component.html',
  styleUrls: ['./consulta-component.component.css']
})
export class ConsultaComponentComponent implements OnInit {
  dato:Dato;
  empleado:Empleado={id:'',employee_name:'',employee_salary:'',employee_age:'',profile_image:''};
  calculo:string;
  resultado:number;
  constructor(private es:ServicioService) {
    
   }

  ngOnInit() {
  }

  consulta(IPC:number){
    this.es.getListadoCompleto()
    .subscribe(dato2=>{this.dato=dato2
      this.empleado=this.dato.data[parseInt(this.empleado.id)-1]
      this.calculo=this.empleado.employee_salary
      this.resultado=parseInt(this.calculo)*IPC});
  }

}
