// produto.service.ts
import { Injectable } from '@angular/core';
import { Produto } from './produto.model';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  private produtos: Produto[] = [];

  getProdutos(): Produto[] {
    return this.produtos;
  }

  adicionarProduto(produto: Produto): void {
    this.produtos.push(produto);
  }
}
