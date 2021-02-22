import { Component, OnInit } from '@angular/core'
import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: "root"
})

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {

  rutaApi = "https://dog.ceo/api/breeds/image/random"

  
  //CONSTRUCTOR
  constructor(private http: HttpClient){}

  //METODOS
  ngOnInit(): void {
    let perro = this.obtener()

  }

  public obtener() {
    return this.http.get(`${this.rutaApi}/obtenerPersonas.php`)
  }

}

