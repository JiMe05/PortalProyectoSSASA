// Importa el tipo Routes desde el módulo de enrutamiento de Angular.
import { Routes } from '@angular/router';

// Importa los componentes que se utilizarán en las rutas.
import { PerfilComponent } from './perfil/perfil.component'; // Componente para la ruta 'Perfil'.
import { InicioComponent } from './inicio/inicio.component'; // Componente para la ruta 'Inicio'.
import { PlantillasComponent } from './plantillas/plantillas.component'; // Componente para la ruta 'Plantillas'.
import { Formulario1Component } from './formulario-1/formulario-1.component'; // Componente para la ruta 'Formulario'.
import { ManualesComponent } from './manuales/manuales.component'; // Componente para la ruta 'Manuales'.
import { ContactosComponent } from './contactos/contactos.component'; // Componente para la ruta de Contactos.
import { herramientasComponent } from './herramientas/herramientas.component'; // Componente para la ruta de herramientas.
import { cronogramasComponent} from './cronogramas/cronogramas.component'; // Componente para la ruta de cronograma.
import { ProyectosComponent } from './proyectos/proyectos.component'; // Componente para la ruta de Proyectos.
import { PorcentajeComponent } from './porcentaje/porcentaje.component'; // Componente para la ruta de porcentaje.

// Define las rutas de la aplicación como un arreglo de objetos.
export const routes: Routes = [
  { path: '', redirectTo: '/Inicio', pathMatch: 'full' }, // Redirige a '/Inicio' si no hay ruta especificada
  { path: 'Perfil', component: PerfilComponent }, // Cuando la URL sea '/Perfil', se cargará el PerfilComponent.
  { path: 'Inicio', component: InicioComponent }, // Cuando la URL sea '/Inicio', se cargará el InicioComponent.
  { path: 'Plantillas', component: PlantillasComponent }, // Cuando la URL sea '/Plantillas', se cargará el PlantillasComponent.
  { path: 'formulario-1', component: Formulario1Component }, // Cuando la URL sea '/formulario-1', se cargará el Formulario1Component.
  { path: 'manuales', component: ManualesComponent }, // Cuando la URL sea '/manuales', se cargará el ManualesComponent.
  { path: 'contactos', component: ContactosComponent }, // Cuando la URL sea '/contactos', se cargará el ContactosComponent.
  { path: 'herramientas', component: herramientasComponent }, // Cuando la URL sea '/herramientas', se cargará el HerramientasComponent.
  { path: 'Proyectos', component: ProyectosComponent }, // Cuando la URL sea '/Proyectos', se cargará el ProyectosComponent.
  { path: 'Porcentaje', component: PorcentajeComponent }, // Cuando la URL sea '/Porcentaje', se cargará el PorcentajeComponent.
  { path: 'cronogramas',component:cronogramasComponent} //
];
