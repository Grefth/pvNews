import { Component, OnInit } from '@angular/core';
import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { stringify } from '@angular/compiler/src/util';
import { getLocaleDateFormat } from '@angular/common';



@Injectable({
  providedIn: "root"
})

@Component({
  selector: 'app-anuncios',
  templateUrl: './anuncios.component.html',
  styleUrls: ['./anuncios.component.css']
})
export class AnunciosComponent implements OnInit {

  rutaApi = "https://dog.ceo/api/breeds/image/random";
  constructor(private http: HttpClient){}

  public obtener() {
    return this.http.get(`${this.rutaApi}/obtenerPersonas.php`);
  }

  
  ngOnInit(): void {
    let perro = this.obtener();


    

    
    
  }


  


}
