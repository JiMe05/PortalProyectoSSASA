// Importa el módulo TestBed de Angular para configurar el entorno de prueba.
import { TestBed } from '@angular/core/testing';
// Importa el componente que se va a probar.
import { AppComponent } from './app.component';

// Describe un conjunto de pruebas para el AppComponent.
describe('AppComponent', () => {
  
  // Antes de cada prueba, configura el módulo de prueba.
  beforeEach(async () => {
    // Configura TestBed para que incluya el AppComponent.
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents(); // Compila los componentes declarados.
  });

  // Prueba para verificar que el componente se crea correctamente.
  it('should create the app', () => {
    // Crea una instancia del componente usando TestBed.
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // Obtiene la instancia del componente.
    expect(app).toBeTruthy(); // Verifica que la instancia del componente sea verdadera (exista).
  });

  // Prueba para verificar que el título del componente es 'sobre_mi'.
  it(`should have the 'sobre_mi' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance; // Obtiene la instancia del componente.
    expect(app.title).toEqual('sobre_mi'); // Verifica que el título del componente sea igual a 'sobre_mi'.
  });

  // Prueba para verificar que se renderiza el título correctamente en la plantilla.
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges(); // Detecta cambios en el componente (actualiza la vista).
    const compiled = fixture.nativeElement as HTMLElement; // Obtiene el elemento nativo del componente.
    // Verifica que el contenido de <h1> contenga el texto 'Hello, sobre_mi'.
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, sobre_mi');
  });
});
