import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Importação do módulo de rotas

// Importação dos componentes
import { TelaCadastroProdutosComponent } from './tela-cadastro-produtos/tela-cadastro-produtos.component';
import { TelaProdutosComponent } from './tela-produtos/tela-produtos.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [TelaCadastroProdutosComponent, TelaProdutosComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AppComponent, // Importe o AppComponent diretamente aqui
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
