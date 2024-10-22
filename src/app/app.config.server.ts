// Importa funciones y tipos necesarios de Angular core y Angular platform-server.
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core'; // Función para fusionar configuraciones de aplicación y tipo de configuración de aplicación.
import { provideServerRendering } from '@angular/platform-server'; // Proveedor para habilitar la renderización del lado del servidor.
import { appConfig } from './app.config'; // Importa la configuración de la aplicación desde un archivo de configuración.

const serverConfig: ApplicationConfig = { // Define una constante para la configuración específica del servidor.
  providers: [
    provideServerRendering() // Proporciona la capacidad de renderización del lado del servidor.
  ]
};

// Fusiona la configuración de la aplicación principal con la configuración del servidor y la exporta.
export const config = mergeApplicationConfig(appConfig, serverConfig);
