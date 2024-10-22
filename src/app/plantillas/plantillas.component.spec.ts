import { ComponentFixture, TestBed } from '@angular/core/testing'; // Importa los módulos necesarios para las pruebas de componentes de Angular

import { PlantillasComponent } from './plantillas.component'; // Importa el componente a probar

// Describe el conjunto de pruebas para PlantillasComponent
describe('PlantillasComponent', () => {
  let component: PlantillasComponent; // Declara una variable para la instancia del componente
  let fixture: ComponentFixture<PlantillasComponent>; // Declara una variable para el Fixture, que encapsula el componente y su entorno de prueba

  // Bloque de configuración antes de cada prueba
  beforeEach(async () => {
    // Configura un módulo de prueba para el componente
    await TestBed.configureTestingModule({
      imports: [PlantillasComponent] // Importa el componente que se va a probar
    })
    .compileComponents(); // Compila los componentes que se han importado

    // Crea una instancia del componente y su fixture
    fixture = TestBed.createComponent(PlantillasComponent);
    component = fixture.componentInstance; // Asigna la instancia del componente a la variable component
    fixture.detectChanges(); // Detecta cambios en el componente (inicializa el componente)
  });

  // Prueba para verificar que el componente se crea correctamente
  it('should create', () => {
    expect(component).toBeTruthy(); // Comprueba que la instancia del componente no es nula
  });
});
