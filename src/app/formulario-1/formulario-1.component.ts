import { Component } from '@angular/core'; // Importa el decorador Component de Angular
import { Router } from '@angular/router'; // Importa el servicio Router para la navegación entre rutas

// Define un componente Angular llamado Formulario1Component
@Component({
  selector: 'app-formulario-1', // Selector que se usará para incrustar este componente en otros componentes o en la plantilla
  standalone: true, // Indica que este componente es independiente y no depende de otros módulos
  imports: [], // Sección para importar otros módulos o componentes, actualmente vacía
  templateUrl: './formulario-1.component.html', // Ruta al archivo HTML que define la plantilla del componente
  styleUrls: ['./formulario-1.component.css'] // Ruta al archivo CSS que define los estilos del componente
})
export class Formulario1Component {
  // Constructor del componente, donde se inyecta el servicio Router
  constructor(private router: Router) {}

  // Método para redirigir a otra ruta cuando se llame
  redirigir1(): void {
    // Utiliza el servicio Router para navegar a la ruta '/Formulario_1'
    this.router.navigate(['/Inicio']);
  }
}
