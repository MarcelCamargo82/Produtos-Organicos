// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { TelaCadastroProdutosComponent } from './tela-cadastro-produtos/tela-cadastro-produtos.component';
import { TelaProdutosComponent } from './tela-produtos/tela-produtos.component';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([])],
  declarations: [TelaCadastroProdutosComponent, TelaProdutosComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
