// Importa el decorador Component de Angular para definir un componente.
import { Component } from '@angular/core';
// Importa RouterOutlet para permitir la navegación entre diferentes rutas en la aplicación.
import { RouterOutlet } from '@angular/router';
// Importa el componente PerfilComponent, que se usará dentro del componente raíz.
import { PerfilComponent } from './perfil/perfil.component';

// Define el componente raíz de la aplicación.
@Component({
  selector: 'app-root', // Define el selector HTML para usar este componente.
  standalone: true, // Indica que este componente es independiente y no requiere un módulo adicional.
  imports: [RouterOutlet, PerfilComponent], // Especifica los módulos y componentes que se utilizarán en este componente.
  templateUrl: './app.component.html', // Ruta al archivo de plantilla HTML del componente.
  styleUrl: './app.component.css' // Ruta al archivo de estilos CSS del componente.
})
export class AppComponent {
  title = 'sobre_mi'; // Propiedad que almacena el título de la aplicación.
}
