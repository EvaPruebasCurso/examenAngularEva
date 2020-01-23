import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'examenAngularEva';
  constructor(private router:Router){

  }
  ListadoCompleto(){
    this.router.navigate(['listado']);
  }
  ConsultarComponente(){
    this.router.navigate(['consulta']);
  }
  VerMadrid(){
    this.router.navigate(['madrid']);
  }
  VerToledo(){
    this.router.navigate(['toledo'])
  }
}
