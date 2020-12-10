import { Component, OnInit, ɵConsole } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LibrosService } from './libros.service';

declare const $;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'prueba';

  dataLibros: any =[]
  dataLibros2: any = []
  itempagePun = 5
  busqueda: any
  busquedaTermina: any 
  busquedaEmpieza: any
  busquedaNoIgual: any 
  busquedaIgual: any
  busquedaNoContiene: any
  busquedaContiene: any  
  busquedaCosto:any
  busquedaNumEjemplares: any 
  busquedaFecha: any
  busquedaAutor:any 
  busquedaDescripcion: any 
  busquedaContieneDescripcion: any 
  busquedaNoContieneDescripcion: any
  busquedaIgualDescripcion: any 
  busquedaNoIgualDescripcion: any
  busquedaEmpiezaDescripcion: any
  busquedaTerminaDescripcion: any 
  busquedaContieneAutor: any 
  busquedaNoContieneAutor: any
  busquedaIgualAutor: any 
  busquedaNoIgualAutor: any
  busquedaEmpiezaAutor: any
  busquedaTerminaAutor: any 

  busquedaContieneFecha: any 
  busquedaNoContieneFecha: any
  busquedaIgualFecha: any 
  busquedaNoIgualFecha: any
  busquedaEmpiezaFecha: any
  busquedaTerminaFecha: any 
  busquedaContieneNumEjemplares: any 
  busquedaNoContieneNumEjemplares: any
  busquedaIgualNumEjemplares: any 
  busquedaNoIgualNumEjemplares: any
  busquedaEmpiezaNumEjemplares: any
  busquedaTerminaNumEjemplares: any 
  busquedaContieneCosto: any 
  busquedaNoContieneCosto: any
  busquedaIgualCosto: any 
  busquedaNoIgualCosto: any
  busquedaEmpiezaCosto: any
  busquedaTerminaCosto: any 

  bloqueadorBotonAgregar: boolean = true

  ngOnInit(){
    this.LibrosService.lista().subscribe(
      data =>{
        console.log(data);
        this.dataLibros2 = data;
      }
    )
  }

  constructor(private LibrosService: LibrosService) {
setInterval(() => {
  $(document).ready(function() {
    $('#resultados').dataTable();
} );
}, 3000);

  }

  kPNumeros(event: any){
    const pattern = /^[0-9]*$/;
    const inputChar = String.fromCharCode(event.charCode);
    if(event.keyCode !== 8 && !pattern.test(inputChar)){
      event.preventDefault();
    }
  }

  imprimir(){
    console.log(this.busqueda)
   
  }

  agregar() {
    let libros = {
      autor: this.dataLibros.autor,
      costo: this.dataLibros.costo,
      descripcion: this.dataLibros.descripcionLibro,
      fechaPublicacion: this.dataLibros.fecha,
      nombreLibro: this.dataLibros.nombreLibro,
      numeroEjemplares: this.dataLibros.numEjemplares
    }
    
    this.LibrosService.crear(libros).subscribe(data =>{
      this.LibrosService.lista().subscribe(
        data =>{
          console.log(data);
          this.dataLibros2 = data;
        }
      )
    })

    this.dataLibros = []

  }

  eliminar(id){
    console.log(id);
    this.LibrosService.borrar(id).subscribe(
      data =>{
        this.LibrosService.lista().subscribe(
          data =>{
            console.log(data);
            this.dataLibros2 = data;
          }
        )
      }
    )
  }

  cargarDatos(id){
    this.bloqueadorBotonAgregar=false
    let existe = this.dataLibros2.filter(x => x.id===id)
    
    
    this.dataLibros.autor = existe[0].autor
    this.dataLibros.costo = existe[0].costo
    this.dataLibros.descripcionLibro = existe[0].descripcion
    this.dataLibros.fecha = existe[0].fechaPublicacion
    this.dataLibros.id = existe[0].id
    this.dataLibros.nombreLibro = existe[0].nombreLibro
    this.dataLibros.numEjemplares = existe[0].numeroEjemplares 
  }

  modificar(){
    let libros = {
      id: this.dataLibros.id,
      autor: this.dataLibros.autor,
      costo: this.dataLibros.costo,
      descripcion: this.dataLibros.descripcionLibro,
      fechaPublicacion: this.dataLibros.fecha,
      nombreLibro: this.dataLibros.nombreLibro,
      numeroEjemplares: this.dataLibros.numEjemplares
    }
    
    this.LibrosService.modificar(libros).subscribe(data =>{
      this.LibrosService.lista().subscribe(
        data =>{
          console.log(data);
          this.dataLibros2 = data;
        }
      )
    })

    this.dataLibros = []
    this.bloqueadorBotonAgregar=true
  }
}
