// src/app/tela-cadastro-produtos/tela-cadastro-produtos.component.ts
import { Component } from '@angular/core';

interface Produto {
  nome: string;
  preco: number;
  quantidade: number;
}

@Component({
  selector: 'app-tela-cadastro-produtos',
  templateUrl: './tela-cadastro-produtos.component.html',
  styleUrls: ['./tela-cadastro-produtos.component.css'],
})
export class TelaCadastroProdutosComponent {
  novoProduto: Produto = {
    nome: '',
    preco: 0,
    quantidade: 0,
  };

  produtos: Produto[] = [];

  cadastrarProduto(): void {
    this.produtos.push({ ...this.novoProduto });
    this.novoProduto = { nome: '', preco: 0, quantidade: 0 };
  }
}
