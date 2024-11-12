import { Routes } from '@angular/router';
import { TelaCadastroProdutosComponent } from './tela-cadastro-produtos/tela-cadastro-produtos.component';
import { TelaProdutosComponent } from './tela-produtos/tela-produtos.component';

export const routes: Routes = [
  { path: '', component: TelaProdutosComponent }, // Definindo a TelaProdutos como página inicial
  { path: 'cadastro', component: TelaCadastroProdutosComponent },
  { path: 'produtos', component: TelaProdutosComponent },
];
