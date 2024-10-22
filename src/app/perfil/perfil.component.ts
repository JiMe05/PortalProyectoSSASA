import { Component } from '@angular/core'; // Importa el decorador Component desde Angular core
import { Router } from '@angular/router'; // Importa el servicio Router para la navegación

// Decorador Component que define la clase como un componente de Angular
@Component({
  selector: 'app-perfil', // Selector que se usará para representar este componente en HTML
  standalone: true, // Indica que este componente es independiente y no requiere un módulo Angular
  imports: [], // Sección que podría incluir otros módulos que este componente necesita, actualmente vacía
  templateUrl: './perfil.component.html', // URL del archivo HTML que define la plantilla dels componente
  styleUrls: ['./perfil.component.css'] // URL del archivo CSS que contiene los estilos del componente
})
export class PerfilComponent {  
  // Constructor que recibe el servicio Router para la navegación
  constructor(private router: Router) {}

  // Método para redirigir a la ruta '/Inicio'
  redirigir(): void {
    this.router.navigate(['/Inicio']); // Utiliza el servicio Router para navegar a la ruta especificada
  }
}
