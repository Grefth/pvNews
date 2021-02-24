import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-participaciones',
  templateUrl: './participaciones.component.html',
  styleUrls: ['./participaciones.component.css']
})
export class ParticipacionesComponent implements OnInit {

  //PROPIEDADES
  meses = ["Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"]
  escuelaSabatica = ['Eutiminio Gonzalez',
    'Ana Vargas',
    'Abel Moreno',
    'Ramon Alvarez',
    'Jessy Lopez']
  instructoresBiblicos = ['Mario Lozano y Abel Moreno',
    'Ivan Serna y Fatima Cervantes',
    'Ruben Gonzalez y Carlos Ayon',
    'Ruben Salazar y Eutiminio Gonzalez',
    'Aganetha Dyck y Aracely Melesio']
    dia = 1000*60*60*24
    contenedor = 'container'

  constructor() { }

  ngOnInit(): void {
    let diaDeHoy: Date = new Date()
    let finCicloEclesiastico = new Date('2021-09-26')

    console.log('Fin del siclo eclesiatico=> ' + finCicloEclesiastico)
    console.log("Esta es la fecha del sabado que entra: " + this.obtenerSiguienteSabado(diaDeHoy))
    console.log("Esta es mes en Indice: " + this.convertirMes(diaDeHoy.getMonth()))
    this.cambioContenedor()
    console.log(this.contenedor)


  }

  obtenerSiguienteSabado(fecha: Date) {
    //let tem = fecha.getDay()
    if (fecha.getDay() === 6) {
      return fecha
    } else {
      let tem = 6 - fecha.getDay()
      return fecha = new Date(fecha.getTime() + this.dia * tem)
    }
  }

  convertirMes(mes: number) {
    return this.meses[mes]
  }

  cambioContenedor(){
    if (document.body.clientWidth > 377) {
      this.contenedor = 'Container'
    } else {
      this.contenedor = 'null'
    }
  }
  
}

//Calcular el numero de sabados en un mes para ponerlos en el rowspan +1


