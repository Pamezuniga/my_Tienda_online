import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-categoria2',
  templateUrl: './categoria2.page.html',
  styleUrls: ['./categoria2.page.scss'],
})
export class Categoria2Page implements OnInit {

  constructor(public servicio:DatosService) { }
producto:any;
  async ngOnInit(){
    this.servicio.getSueter()
    .subscribe((data:any)=>{
      this.producto=data;
      console.log(this.producto)
      this.producto=data.results;
  })
 }

}
