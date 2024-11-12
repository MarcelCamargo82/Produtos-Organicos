import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  produtos = [
    { id: 1, nome: 'Alface Orgânica', preco: 5.0, quantidade: 10 },
    { id: 2, nome: 'Tomate Orgânico', preco: 7.0, quantidade: 15 },
    { id: 3, nome: 'Cenoura Orgânica', preco: 6.0, quantidade: 12 },
  ];

  carrinho = [];

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.produtos = this.produtoService.getProdutos();
  }

  adicionarAoCarrinho(produto) {
    this.carrinho.push(produto);
  }

  calcularTotal() {
    return this.carrinho.reduce((total, produto) => total + produto.preco, 0);
  }
}
