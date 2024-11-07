import { Component } from '@angular/core'; // Importa el decorador Component de Angular para definir un componente
import { Router } from '@angular/router'; // Importa Router para manejar la navegación entre rutas

// Define el componente InicioComponent
@Component({
  selector: 'app-inicio', // Define el selector del componente, que se usará en las plantillas
  standalone: true, // Indica que este componente es independiente (standalone)
  imports: [], // Sección para importar otros módulos o componentes, si es necesario
  templateUrl: './inicio.component.html', // Especifica la plantilla HTML asociada a este componente
  styleUrls: ['./inicio.component.css'] // Especifica los estilos CSS asociados a este componente
})
export class InicioComponent {
  constructor(private router: Router) {} // Inyecta el servicio Router en el constructor para poder usarlo en la clase

  // Método para redirigir a la ruta de Plantillas
  redirigir1(): void {
    this.router.navigate(['/Plantillas']); // Navega a la ruta '/Plantillas' cuando se llama a este método
  }

  // Método para redirigir a la ruta de Formulario_1
  redirigir2(): void {
    this.router.navigate(['/formulario-1']); // Navega a la ruta '/Formulario_1' cuando se llama a este método
  }

  // Método para redirigir a la ruta de Formulario_1
  redirigir3(): void {
    this.router.navigate(['/manuales']); // Navega a la ruta '/Formulario_1' cuando se llama a este método
  }

  regresar(): void{
    this.router.navigate(['/Perfil']);
  }

  redirigir4(): void{
    this.router.navigate(['/contactos']);
  }

  redirigir5(): void{
    this.router.navigate(['/herramientas'])
  }

  redirigir6():void{
    this.router.navigate(['/cronogramas'])
  }

  
  redirigir7():void{
    this.router.navigate(['/Proyectos'])
  }

  

}
