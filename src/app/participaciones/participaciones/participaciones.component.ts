import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participaciones',
  templateUrl: './participaciones.component.html',
  styleUrls: ['./participaciones.component.css']
})
export class ParticipacionesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //obenter el sabado siguente
    var meses:String[] = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    console.log('ESTPO ES EL RETORNO'+this.toGetNextSat());
    


  
  }

  toGetNextSat():String {
    //retorna el dia y mes del siguiente sabado
    let unDia:number = 86_400_000;
    let hoy: Date = new Date();
    
    if (hoy.getUTCDay() === 6) {
      return hoy+'';
    } else {
      do {
        hoy = new Date(hoy.getTime() + unDia);
      } while (hoy.getUTCDay() < 6);
    }
    return hoy+'';
  }

  toGetToMonth():string{
    
    return '';
  }

}
