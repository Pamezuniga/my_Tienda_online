import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor(public servicio:DatosService) { }
producto:any;
  async ngOnInit(){
    this.servicio.getServicios()
    .subscribe((data:any)=>{
      this.producto=data;
      console.log(this.producto)
      this.producto=data.results;
  })
 }
}
