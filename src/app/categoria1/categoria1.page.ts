import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-categoria1',
  templateUrl: './categoria1.page.html',
  styleUrls: ['./categoria1.page.scss'],
})
export class Categoria1Page implements OnInit {
  
  constructor(public servicio:DatosService) {}
producto:any;
  async ngOnInit(){
    this.servicio.getCamisa()
    .subscribe((data:any)=>{
      this.producto=data;
      console.log(this.producto)
      this.producto=data.results;
  })
 }
}
