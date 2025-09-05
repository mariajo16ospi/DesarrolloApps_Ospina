import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Clase1Component } from "./clases/clase1/clase1.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Clase1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rutas';
}
