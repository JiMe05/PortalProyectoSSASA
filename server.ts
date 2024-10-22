import { APP_BASE_HREF } from '@angular/common'; // Importa el símbolo APP_BASE_HREF que se usa para establecer la ruta base en la aplicación.
import { CommonEngine } from '@angular/ssr'; // Importa CommonEngine que es responsable de la renderización del lado del servidor.
import express from 'express'; // Importa el módulo express para crear la aplicación del servidor.
import { fileURLToPath } from 'node:url'; // Importa fileURLToPath para manejar URLs de archivos en el sistema.
import { dirname, join, resolve } from 'node:path'; // Importa funciones de path para manejar rutas de archivos.
import bootstrap from './src/main.server'; // Importa el archivo main.server que inicializa la aplicación Angular en el servidor.

// La función de la aplicación Express se exporta para que pueda ser utilizada por funciones sin servidor.
export function app(): express.Express {
  const server = express(); // Crea una instancia de la aplicación Express.
  const serverDistFolder = dirname(fileURLToPath(import.meta.url)); // Obtiene la ruta del directorio donde se encuentra este archivo.
  const browserDistFolder = resolve(serverDistFolder, '../browser'); // Resuelve la ruta del directorio que contiene los archivos de la aplicación Angular.
  const indexHtml = join(serverDistFolder, 'index.server.html'); // Construye la ruta al archivo HTML de entrada del servidor.

  const commonEngine = new CommonEngine(); // Crea una instancia de CommonEngine para renderizar las vistas.

  server.set('view engine', 'html'); // Establece el motor de vista a HTML.
  server.set('views', browserDistFolder); // Establece el directorio de vistas al de la aplicación Angular.

  // Ejemplo de puntos finales API REST de Express (descomentados para uso futuro)
  // server.get('/api/**', (req, res) => { });

  // Sirve archivos estáticos desde el directorio /browser
  server.get('**', express.static(browserDistFolder, {
    maxAge: '1y', // Establece el tiempo de caché de los archivos estáticos a 1 año.
    index: 'index.html', // Indica que se use index.html como archivo de índice.
  }));

  // Todas las rutas regulares utilizan el motor Angular para renderizar
  server.get('**', (req, res, next) => {
    const { protocol, originalUrl, baseUrl, headers } = req; // Desestructura información relevante de la solicitud.

    commonEngine
      .render({
        bootstrap, // El bootstrap de la aplicación Angular.
        documentFilePath: indexHtml, // Ruta del documento HTML para renderizar.
        url: `${protocol}://${headers.host}${originalUrl}`, // Construye la URL completa de la solicitud.
        publicPath: browserDistFolder, // Ruta pública de los archivos de la aplicación.
        providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }], // Proveedor para establecer la ruta base de la aplicación.
      })
      .then((html) => res.send(html)) // Envía el HTML renderizado como respuesta.
      .catch((err) => next(err)); // Maneja errores en el proceso de renderización.
  });

  return server; // Retorna la instancia de la aplicación Express.
}

// Función para iniciar el servidor
function run(): void {
  const port = process.env['PORT'] || 4000; // Establece el puerto a usar, prefiriendo una variable de entorno si está disponible.

  // Inicia el servidor Node
  const server = app(); // Crea la aplicación Express.
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`); // Muestra un mensaje en la consola con la dirección del servidor.
  });
}

// Llama a la función run para iniciar el servidor
run();
