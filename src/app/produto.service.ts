import { Injectable } from '@angular/core';
import { Produto } from './produto.model'; // Importa o modelo Produto

@Injectable({
  providedIn: 'root', // Disponível globalmente na aplicação
})
export class ProdutoService {
  private produtos: Produto[] = []; // Armazena os produtos em estoque

  // Método para adicionar um produto ao estoque
  adicionarProduto(produto: Produto) {
    this.produtos.push(produto); // Adiciona o produto à lista
  }

  // Método para obter todos os produtos
  getProdutos(): Produto[] {
    return this.produtos; // Retorna a lista de produtos
  }

  // Método para atualizar o estoque de um produto
  atualizarEstoque(produto: Produto) {
    const index = this.produtos.findIndex((p) => p.nome === produto.nome);
    if (index !== -1) {
      this.produtos[index] = produto; // Substitui o produto na lista
    }
  }
}
