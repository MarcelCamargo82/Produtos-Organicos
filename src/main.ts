import { appConfig } from './app/app.config';
import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Certifique-se de importar RouterModule e Routes corretamente
import { AppComponent } from './app/app.component';
import { TelaProdutosComponent } from './app/tela-produtos/tela-produtos.component';
import { TelaCadastroProdutosComponent } from './app/tela-cadastro-produtos/tela-cadastro-produtos.component';

enableProdMode();

// Definindo as rotas corretamente
const routes: Routes = [
  { path: 'produtos', component: TelaProdutosComponent },
  { path: 'cadastro-produto', component: TelaCadastroProdutosComponent },
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
];

// Inicializando a aplicação Angular
bootstrapApplication(AppComponent, {
  providers: [
    RouterModule, // Apenas RouterModule, sem .forRoot
  ],
}).catch((err) => console.error(err));
