// tela-produtos.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-tela-produtos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tela-produtos.component.html',
  styleUrls: ['./tela-produtos.component.css'],
})
export class TelaProdutosComponent implements OnInit {
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtos = this.produtoService.getProdutos();
  }

  adicionarAoCarrinho(produto: Produto): void {
    if (produto.quantidade > 0) {
      produto.quantidade--;
      console.log('Produto adicionado ao carrinho:', produto);
    } else {
      console.log('Produto fora de estoque');
    }
  }
}
