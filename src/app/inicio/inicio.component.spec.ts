import { ComponentFixture, TestBed } from '@angular/core/testing'; // Importa herramientas para realizar pruebas en Angular
import { InicioComponent } from './inicio.component'; // Importa el componente que se va a probar

// Describe un conjunto de pruebas para el InicioComponent
describe('InicioComponent', () => {
  let component: InicioComponent; // Declara una variable para el componente que se va a probar
  let fixture: ComponentFixture<InicioComponent>; // Declara una variable para la "fixture" del componente, que encapsula el componente y su DOM

  // Ejecuta antes de cada prueba dentro de este bloque
  beforeEach(async () => {
    // Configura un módulo de prueba que contiene el componente a probar
    await TestBed.configureTestingModule({
      imports: [InicioComponent] // Declara que se va a importar el InicioComponent en el módulo de pruebas
    })
    .compileComponents(); // Compila los componentes de forma asíncrona

    // Crea la fixture del componente, que permite interactuar con el componente y su DOM
    fixture = TestBed.createComponent(InicioComponent);
    component = fixture.componentInstance; // Asigna la instancia del componente a la variable 'component'
    fixture.detectChanges(); // Realiza la detección de cambios, actualizando el DOM del componente
  });

  // Define una prueba unitaria
  it('should create', () => {
    // Verifica que el componente se haya creado exitosamente
    expect(component).toBeTruthy();
  });
});
