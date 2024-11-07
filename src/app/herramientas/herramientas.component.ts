import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-herramientas',
  standalone: true,
  imports: [],
  templateUrl: './herramientas.component.html',
  styleUrl: './herramientas.component.css'
})
export class herramientasComponent {

   // Aquí puedes agregar propiedades y métodos del componente según sea necesario
  // Constructor que recibe el servicio Router para la navegación
  constructor(private router: Router) {}

  // Método para redirigir a la ruta '/Inicio'
  redirigir(): void {
    this.router.navigate(['/Inicio']); // Utiliza el servicio Router para navegar a la ruta especificada
  }
   

}
