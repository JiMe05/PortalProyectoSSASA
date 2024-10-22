// Importa tipos y funciones necesarios de Angular core y Angular router.
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core'; // Tipo para la configuración de la aplicación y función para habilitar la detección de cambios en zonas.
import { provideRouter } from '@angular/router'; // Proveedor para habilitar el enrutamiento en la aplicación.

import { routes } from './app.routes'; // Importa las rutas definidas en otro archivo para el enrutamiento de la aplicación.

// Define la configuración de la aplicación.
export const appConfig: ApplicationConfig = {
  // Proveedores que se usarán en la aplicación.
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), // Habilita la detección de cambios utilizando zonas, mejorando el rendimiento al agrupar eventos en un solo ciclo de detección de cambios.
    provideRouter(routes) // Proporciona el enrutador y las rutas definidas en el archivo app.routes.
  ]
};

