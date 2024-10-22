import { bootstrapApplication } from '@angular/platform-browser'; // Importa la función bootstrapApplication de Angular para iniciar la aplicación en el entorno del navegador.
import { appConfig } from './app/app.config'; // Importa la configuración de la aplicación desde el archivo app.config, que contiene proveedores y configuraciones necesarias.
import { AppComponent } from './app/app.component'; // Importa el componente raíz de la aplicación, que sirve como punto de entrada.

bootstrapApplication(AppComponent, appConfig) // Llama a la función bootstrapApplication, pasando el componente raíz y la configuración de la aplicación.
  .catch((err) => console.error(err)); // Captura cualquier error que ocurra durante el arranque de la aplicación y lo imprime en la consola.

