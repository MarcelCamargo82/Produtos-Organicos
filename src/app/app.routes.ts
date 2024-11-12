// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { TelaCadastroProdutosComponent } from './tela-cadastro-produtos/tela-cadastro-produtos.component';
import { TelaProdutosComponent } from './tela-produtos/tela-produtos.component';

export const routes: Routes = [
  { path: '', component: TelaProdutosComponent }, // Página inicial
  { path: 'cadastro', component: TelaCadastroProdutosComponent }, // Rota para cadastro
  { path: 'produtos', component: TelaProdutosComponent }, // Rota para produtos
];
