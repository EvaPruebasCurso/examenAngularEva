import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dato } from '../Interfaces/dato';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }
  getListadoCompleto(){
    const path="http://dummy.restapiexample.com/api/v1/employees";
    return this.http.get<Dato>(path);
  }
  getComponenteUnico(id:string){
    const path='http://dummy.restapiexample.com/api/v1/employee/'+id;
    return this.http.get<Dato>(path);
  }
  
}
