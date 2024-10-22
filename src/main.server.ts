import { bootstrapApplication } from '@angular/platform-browser'; // Importa la función bootstrapApplication de Angular para iniciar la aplicación en el navegador.
import { AppComponent } from './app/app.component'; // Importa el componente raíz de la aplicación, que actúa como punto de entrada.
import { config } from './app/app.config.server'; // Importa la configuración de la aplicación, que incluye proveedores y otras configuraciones necesarias para el renderizado.

const bootstrap = () => bootstrapApplication(AppComponent, config); // Define una función llamada bootstrap que inicia la aplicación usando el componente raíz y la configuración importada.

export default bootstrap; // Exporta la función bootstrap como la exportación predeterminada del módulo.
