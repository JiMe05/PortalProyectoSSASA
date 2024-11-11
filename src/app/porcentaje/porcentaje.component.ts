import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart, registerables } from 'chart.js';
import { FormsModule } from '@angular/forms';

Chart.register(...registerables);

@Component({
  selector: 'app-porcentaje',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './porcentaje.component.html',
  styleUrls: ['./porcentaje.component.css'],
})
export class PorcentajeComponent implements AfterViewInit {
  @ViewChild('grafica') grafica!: ElementRef<HTMLCanvasElement>;
  @ViewChild('grafica2') grafica2!: ElementRef<HTMLCanvasElement>;
  @ViewChild('grafica3') grafica3!:ElementRef<HTMLCanvasElement>;
  @ViewChild('grafica4') grafica4!:ElementRef<HTMLCanvasElement>;
  @ViewChild('grafica5') grafica5!:ElementRef<HTMLCanvasElement>;

  porcentaje: number = 0;
  editando: boolean = false;
  nombre: string = 'Progreso';
  color: string = '#4caf50';
  chart!: Chart<'doughnut', number[], string>;

  porcentaje2: number = 0;
  editando2: boolean = false;
  nombre2: string = 'Progreso';
  color2: string = '#4caf50';
  chart2!: Chart<'doughnut', number[], string>;

  
  porcentaje3: number = 0;
  editando3: boolean = false;
  nombre3: string = 'Progreso';
  color3: string = '#4caf50';
  chart3!: Chart<'doughnut', number[], string>;

  porcentaje4: number = 0;
  editando4: boolean = false;
  nombre4: string = 'Progreso';
  color4: string = '#4caf50';
  chart4!: Chart<'doughnut', number[], string>;

  porcentaje5: number = 0;
  editando5: boolean = false;
  nombre5: string = 'Progreso';
  color5: string = '#4caf50';
  chart5!: Chart<'doughnut', number[], string>;


  constructor(private router: Router) {}

  ngOnInit(): void {
    this.porcentaje = +(localStorage.getItem('porcentaje') ?? '0');
    this.nombre = localStorage.getItem('nombre') ?? this.nombre;
    this.color = localStorage.getItem('color') ?? this.color;
  
    this.porcentaje2 = +(localStorage.getItem('porcentaje2') ?? '0');
    this.nombre2 = localStorage.getItem('nombre2') ?? this.nombre2;
    this.color2 = localStorage.getItem('color2') ?? this.color2;

    this.porcentaje3 = +(localStorage.getItem('porcentaje3') ?? '0');
    this.nombre3 = localStorage.getItem('nombre3') ?? this.nombre3;
    this.color3 = localStorage.getItem('color3') ?? this.color3;

    this.porcentaje4 = +(localStorage.getItem('porcentaje4') ?? '0');
    this.nombre4 = localStorage.getItem('nombre4') ?? this.nombre4;
    this.color4 = localStorage.getItem('color4') ?? this.color4;

    this.porcentaje5 = +(localStorage.getItem('porcentaje5') ?? '0');
    this.nombre5 = localStorage.getItem('nombre5') ?? this.nombre5;
    this.color5 = localStorage.getItem('color5') ?? this.color5;



  }
  
  ngAfterViewInit(): void {
    this.crearGrafica();
    this.crearGrafica2();
    this.crearGrafica3();
    this.crearGrafica4();
    this.crearGrafica5();
  }

  redirigir(): void {
    this.router.navigate(['/Proyectos']);
  }

   //Grafica1 
  crearGrafica(): void {
    const ctx = this.grafica.nativeElement.getContext('2d');
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [this.nombre, 'Faltante'],
          datasets: [
            {
              data: [this.porcentaje, 100 - this.porcentaje],
              backgroundColor: [this.color, '#e0e0e0'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: { legend: { display: true }, tooltip: { enabled: false } },
        },
      });

      // Dibuja el texto una vez que la gráfica se haya creado
      this.dibujarTexto(ctx, this.porcentaje);
    }
  }

  //Grafica2
  crearGrafica2(): void {
    const ctx = this.grafica2.nativeElement.getContext('2d');
    if (ctx) {
      this.chart2 = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [this.nombre2, 'Faltante'],
          datasets: [
            {
              data: [this.porcentaje2, 100 - this.porcentaje2],
              backgroundColor: [this.color2, '#e0e0e0'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: { legend: { display: true }, tooltip: { enabled: false } },
        },
      });

      // Dibuja el texto una vez que la gráfica se haya creado
      this.dibujarTexto(ctx, this.porcentaje2);
    }
  }

  //Grafica3 
  crearGrafica3(): void {
    const ctx = this.grafica3.nativeElement.getContext('2d');
    if (ctx) {
      this.chart3 = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [this.nombre3, 'Faltante'],
          datasets: [
            {
              data: [this.porcentaje3, 100 - this.porcentaje3],
              backgroundColor: [this.color3, '#e0e0e0'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: { legend: { display: true }, tooltip: { enabled: false } },
        },
      });

      // Dibuja el texto una vez que la gráfica se haya creado
      this.dibujarTexto(ctx, this.porcentaje3);
    }
  }

  
  //Grafica4
  crearGrafica4(): void {
    const ctx = this.grafica4.nativeElement.getContext('2d');
    if (ctx) {
      this.chart4 = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [this.nombre4, 'Faltante'],
          datasets: [
            {
              data: [this.porcentaje4, 100 - this.porcentaje4],
              backgroundColor: [this.color4, '#e0e0e0'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: { legend: { display: true }, tooltip: { enabled: false } },
        },
      });

      // Dibuja el texto una vez que la gráfica se haya creado
      this.dibujarTexto(ctx, this.porcentaje4);
    }
  }

   //Grafica5
   crearGrafica5(): void {
    const ctx = this.grafica5.nativeElement.getContext('2d');
    if (ctx) {
      this.chart5 = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: [this.nombre5, 'Faltante'],
          datasets: [
            {
              data: [this.porcentaje5, 100 - this.porcentaje5],
              backgroundColor: [this.color5, '#e0e0e0'],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: { legend: { display: true }, tooltip: { enabled: false } },
        },
      });

      // Dibuja el texto una vez que la gráfica se haya creado
      this.dibujarTexto(ctx, this.porcentaje5);
    }
  }

  incrementar(): void {
    if (this.porcentaje < 100) {
      this.porcentaje += 1;
      this.guardarPorcentaje();
      this.actualizarGrafica();
    }
  }

  decremetar(): void {
    if (this.porcentaje > 0) {
      this.porcentaje -= 1;
      this.guardarPorcentaje();
      this.actualizarGrafica();
    }
  }

  incrementar2(): void {
    if (this.porcentaje2 < 100) {
      this.porcentaje2 += 1;
      this.guardarPorcentaje2();
      this.actualizarGrafica2();
    }
  }

  decrementar2(): void {
    if (this.porcentaje2 > 0) {
      this.porcentaje2 -= 1;
      this.guardarPorcentaje2();
      this.actualizarGrafica2();
    }
  }

  
  incrementar3(): void {
    if (this.porcentaje3 < 100) {
      this.porcentaje3 += 1;
      this.guardarPorcentaje3();
      this.actualizarGrafica3();
    }
  }

  decrementar3(): void {
    if (this.porcentaje3 > 0) {
      this.porcentaje3 -= 1;
      this.guardarPorcentaje3();
      this.actualizarGrafica3();
    }
  }

  
  incrementar4(): void {
    if (this.porcentaje4 < 100) {
      this.porcentaje4 += 1;
      this.guardarPorcentaje4();
      this.actualizarGrafica4();
    }
  }

  decrementar4(): void {
    if (this.porcentaje4 > 0) {
      this.porcentaje4 -= 1;
      this.guardarPorcentaje4();
      this.actualizarGrafica4();
    }
  }

  
  incrementar5(): void {
    if (this.porcentaje5 < 100) {
      this.porcentaje5 += 1;
      this.guardarPorcentaje5();
      this.actualizarGrafica5();
    }
  }

  decrementar5(): void {
    if (this.porcentaje5> 0) {
      this.porcentaje5-= 1;
      this.guardarPorcentaje5();
      this.actualizarGrafica5();
    }
  }

 
  //grafica1
  actualizarGrafica(): void {
    this.chart.data.datasets[0].data = [this.porcentaje, 100 - this.porcentaje];
    this.chart.data.datasets[0].backgroundColor = [this.color, '#e0e0e0'];
    this.chart.update();
    this.dibujarTexto(this.chart.ctx, this.porcentaje);
  }
//grafica 2
  actualizarGrafica2(): void {
    this.chart2.data.datasets[0].data = [this.porcentaje2, 100 - this.porcentaje2];
    this.chart2.data.datasets[0].backgroundColor = [this.color2, '#e0e0e0'];
    this.chart2.update();
    this.dibujarTexto(this.chart2.ctx, this.porcentaje2);
  }

//grafica3  
  actualizarGrafica3(): void {
    this.chart3.data.datasets[0].data = [this.porcentaje3, 100 - this.porcentaje3];
    this.chart3.data.datasets[0].backgroundColor = [this.color3, '#e0e0e0'];
    this.chart3.update();
    this.dibujarTexto(this.chart3.ctx, this.porcentaje3);
  }

  
//grafica4
actualizarGrafica4(): void {
  this.chart4.data.datasets[0].data = [this.porcentaje4, 100 - this.porcentaje4];
  this.chart4.data.datasets[0].backgroundColor = [this.color4, '#e0e0e0'];
  this.chart4.update();
  this.dibujarTexto(this.chart4.ctx, this.porcentaje4);
}
  
//grafica5
actualizarGrafica5(): void {
  this.chart5.data.datasets[0].data = [this.porcentaje5, 100 - this.porcentaje5];
  this.chart5.data.datasets[0].backgroundColor = [this.color5, '#e0e0e0'];
  this.chart5.update();
  this.dibujarTexto(this.chart5.ctx, this.porcentaje5);
}

  guardarPorcentaje(): void {
    localStorage.setItem('porcentaje', this.porcentaje.toString());
    localStorage.setItem('color', this.color);
  }

  guardarPorcentaje2(): void {
    localStorage.setItem('porcentaje2', this.porcentaje2.toString());
    localStorage.setItem('color2', this.color2);
  }

    //grafica3

  guardarPorcentaje3(): void {
    localStorage.setItem('porcentaje3', this.porcentaje3.toString());
    localStorage.setItem('color3', this.color3);
    }  

    //grafica4

  guardarPorcentaje4(): void {
    localStorage.setItem('porcentaje4', this.porcentaje4.toString());
    localStorage.setItem('color4', this.color4);
    }  

    //grafica 5
  guardarPorcentaje5(): void {
    localStorage.setItem('porcentaje5', this.porcentaje5.toString());
    localStorage.setItem('color5', this.color5);
    }  


  dibujarTexto(ctx: CanvasRenderingContext2D, porcentaje: number): void {
    const texto = `${porcentaje}%`;
    const x = ctx.canvas.width / 2;
    const y = ctx.canvas.height / 2;

    ctx.save();
    ctx.font = '30px Arial';
    ctx.fillStyle = '#000';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Limpia el área de la gráfica, pero no borra el dibujo de la gráfica completa
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    // Dibuja el texto en el centro de la gráfica
    ctx.fillText(texto, x, y);
    ctx.restore();
  }

  activarEdicion(): void {
    this.editando = true;
  }

  guardarEdicion(): void {
    this.editando = false;
    this.porcentaje = Math.max(0, Math.min(100, this.porcentaje));
    this.guardarPorcentaje();
    localStorage.setItem('nombre', this.nombre);
    this.actualizarGrafica();
  }

  activarEdicion2(): void {
    this.editando2 = true;
  }

  guardarEdicion2(): void {
    this.editando2 = false;
    this.porcentaje2 = Math.max(0, Math.min(100, this.porcentaje2));
    this.guardarPorcentaje2();
    localStorage.setItem('nombre2', this.nombre2);
    this.actualizarGrafica2();
  }

  activarEdicion3(): void {
    this.editando3 = true;
  }

  guardarEdicion3(): void {
    this.editando3 = false;
    this.porcentaje3 = Math.max(0, Math.min(100, this.porcentaje3));
    this.guardarPorcentaje3();
    localStorage.setItem('nombre3', this.nombre3);
    this.actualizarGrafica3();
  }

  
  activarEdicion4(): void {
    this.editando4 = true;
  }

  guardarEdicion4(): void {
    this.editando4 = false;
    this.porcentaje4 = Math.max(0, Math.min(100, this.porcentaje4));
    this.guardarPorcentaje4();
    localStorage.setItem('nombre4', this.nombre4);
    this.actualizarGrafica4();
  }

   
  activarEdicion5(): void {
    this.editando5 = true;
  }

  guardarEdicion5(): void {
    this.editando5 = false;
    this.porcentaje5 = Math.max(0, Math.min(100, this.porcentaje5));
    this.guardarPorcentaje5();
    localStorage.setItem('nombre5', this.nombre5);
    this.actualizarGrafica5();
  }

  

  cambiarColor(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.color = target.value;
    this.guardarPorcentaje();
    this.actualizarGrafica();
  }

  cambiarColor2(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.color2 = target.value;
    this.guardarPorcentaje2();
    this.actualizarGrafica2();
  }
  
  cambiarColor3(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.color3 = target.value;
    this.guardarPorcentaje3();
    this.actualizarGrafica3();
  }

  cambiarColor4(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.color4 = target.value;
    this.guardarPorcentaje4();
    this.actualizarGrafica4();
  }

  
  cambiarColor5(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.color5 = target.value;
    this.guardarPorcentaje5();
    this.actualizarGrafica5();
  }

}
