import { ComponentFixture, TestBed } from '@angular/core/testing'; // Importa herramientas para pruebas de componentes en Angular
import { Formulario1Component } from './formulario-1.component'; // Importa el componente que se va a probar

// Describe un grupo de pruebas para el componente Formulario1Component
describe('Formulario1Component', () => {
  let component: Formulario1Component; // Variable para la instancia del componente
  let fixture: ComponentFixture<Formulario1Component>; // Variable para la instancia de la prueba del componente

  // Configura el entorno de pruebas antes de cada prueba
  beforeEach(async () => {
    // Configuración de TestBed para el componente
    await TestBed.configureTestingModule({
      imports: [Formulario1Component] // Importa el componente para las pruebas
    })
    .compileComponents(); // Compila los componentes importados

    // Crea la instancia del componente y el fixture
    fixture = TestBed.createComponent(Formulario1Component);
    component = fixture.componentInstance; // Obtiene la instancia del componente
    fixture.detectChanges(); // Detecta cambios en el componente para reflejar el estado inicial
  });

  // Define una prueba específica
  it('should create', () => {
    expect(component).toBeTruthy(); // Comprueba que el componente se haya creado correctamente
  });
});
