import { Injectable } from '@angular/core';
import { Produto } from './produto.model'; // Importa a interface Produto

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private produtos: Produto[] = [
    { id: 1, nome: 'Alface Orgânica', preco: 5.0, quantidade: 10 },
    { id: 2, nome: 'Tomate Orgânico', preco: 7.0, quantidade: 15 },
    { id: 3, nome: 'Cenoura Orgânica', preco: 6.0, quantidade: 12 },
  ];

  constructor() {}

  // Retorna uma cópia dos produtos
  getProdutos(): Produto[] {
    return [...this.produtos];
  }

  // Adiciona um novo produto ao estoque
  adicionarProduto(produto: Produto): void {
    this.produtos.push({ ...produto, id: this.produtos.length + 1 });
  }

  // Atualiza o estoque de um produto
  atualizarEstoque(id: number, quantidade: number): void {
    const produto = this.produtos.find((p) => p.id === id);
    if (produto) {
      produto.quantidade = quantidade;
    }
  }
}
