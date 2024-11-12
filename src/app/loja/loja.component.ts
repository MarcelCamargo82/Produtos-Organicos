import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css'],
})
export class LojaComponent implements OnInit {
  estoque = [
    { id: 1, nome: 'Alface Orgânica', preco: 5.0, quantidade: 10 },
    { id: 2, nome: 'Tomate Orgânico', preco: 7.0, quantidade: 15 },
    { id: 3, nome: 'Cenoura Orgânica', preco: 6.0, quantidade: 12 },
  ];

  novoProduto = { nome: '', preco: 0, quantidade: 0 };

  constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {}

  adicionarProduto() {
    if (
      this.novoProduto.nome &&
      this.novoProduto.preco > 0 &&
      this.novoProduto.quantidade > 0
    ) {
      this.estoque.push({ ...this.novoProduto, id: this.estoque.length + 1 });
      this.novoProduto = { nome: '', preco: 0, quantidade: 0 }; // Reset form
    }
  }
}
