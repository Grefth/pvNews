import { Component } from '@angular/core';
declare const M: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Iglesia de Palo Verde';

  size = {
    width: window.innerWidth || document.body.clientWidth,
    height: window.innerHeight || document.body.clientHeight
  }


  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems);
    });
    this.cambioTitulo()

    //BOTON FLOTANTE
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.fixed-action-btn');
      var instances = M.FloatingActionButton.init(elems);
    });

  }

  cambioTitulo() {
    if (document.body.clientWidth < 377) {
      this.titulo = 'Palo Verde'
    } else {
      this.titulo = 'Iglesia de Palo Verde'
    }
  }




}
