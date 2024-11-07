import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PerfilComponent } from './perfil/perfil.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule

@Component({
  selector: 'app-root',
  standalone: true, // Componente independiente
  imports: [RouterOutlet, PerfilComponent, FormsModule], // Asegúrate de incluir FormsModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrige el nombre de 'styleUrl' a 'styleUrls'
})
export class AppComponent {
  title = 'sobre_mi';
}
