import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http:HttpClient) { }

  getDatos()
  {
    return this.http.get("http://miempresagomez06.com/personas?select=*");
  }

  getServicios()
  {
    return this.http.get("http://miempresagomez06.com/servicios?select=*");
  }
  getCamisa()
  {
    return this.http.get("http://miempresagomez06.com/categoria1?select=*");
  }
  getSueter()
  {
    return this.http.get("http://miempresagomez06.com/categoria2?select=*");
  }
  
}
