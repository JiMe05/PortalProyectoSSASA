// Importa el tipo Routes desde el módulo de enrutamiento de Angular.
import { Routes } from '@angular/router'; 

// Importa los componentes que se utilizarán en las rutas.
import { PerfilComponent } from './perfil/perfil.component'; // Componente para la ruta 'Perfil'.
import { InicioComponent } from './inicio/inicio.component'; // Componente para la ruta 'Inicio'.
import { PlantillasComponent } from './plantillas/plantillas.component'; // Componente para la ruta 'Plantillas'.
import { Formulario1Component } from './formulario-1/formulario-1.component';// Componente para la ruta 'Formulario'.
import { ManualesComponent } from './manuales/manuales.component'; //componente para la ruta 'Manuales'.



// Define las rutas de la aplicación como un arreglo de objetos.
export const routes: Routes = [
    // Ruta para el componente Perfil.
    {path:'Perfil', component: PerfilComponent}, // Cuando la URL sea '/Perfil', se cargará el PerfilComponent.
    
     // Ruta para el componente Inicio.
   {path:'Inicio', component: InicioComponent}, // Cuando la URL sea '/Inicio', se cargará el InicioComponent.
    
         // Ruta para el componente Plantillas.
   {path:'Plantillas', component: PlantillasComponent}, // Cuando la URL sea '/Plantillas', se cargará el PlantillasComponent.

            // Ruta para el componente Formulario1.
   {path:'formulario-1',component: Formulario1Component}, //cuando la URL se /formulario1, se cargara el Formulario1component

   {path:'manuales', component: ManualesComponent} //cuando la URL se /manuales, se cargara el manualesComponent
   
];
