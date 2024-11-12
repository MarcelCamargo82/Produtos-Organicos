import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaCadastroProdutosComponent } from './tela-cadastro-produtos/tela-cadastro-produtos.component';
import { TelaProdutosComponent } from './tela-produtos/tela-produtos.component';

const routes: Routes = [
  { path: 'cadastro-produtos', component: TelaCadastroProdutosComponent },
  { path: 'produtos', component: TelaProdutosComponent },
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
