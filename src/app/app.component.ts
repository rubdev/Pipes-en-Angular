import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Rubén';
  tabla = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  porcentaje = 0.54723434534;
  pokemon = {
    nombre: 'pikachu',
    tipo: 'electrico',
    evoluciona: 'si'
  };
  hoy = Date();
}
