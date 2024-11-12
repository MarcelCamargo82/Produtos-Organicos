// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importando RouterModule para usar o <router-outlet>

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Apontando para o arquivo correto
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule], // Importando o RouterModule para habilitar <router-outlet>
})
export class AppComponent {
  title = 'loja-organicos';
}
