import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroeBorrado:string=''
  estado:boolean = true

  heroes:string[]=['Spiderman','Ironman','Thor','Capitan America','Hulk']
 

  borrarHeroe(){
    
    console.log("Borrando heroe")
    //la funcion shift puede devolver 2 tipos diferentes de valor, por lo cual se indica que aparte del string devuelva un espacio vacio
    const heroe =this.heroes.shift() || ''

    if(heroe==''){
      this.estado=false
    }

    this.heroeBorrado = heroe
    
  }

  
}
