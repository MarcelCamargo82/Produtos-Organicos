import { Component } from '@angular/core';
import { ProdutoService } from '../produto.service'; // Certifique-se de que o serviço está correto
import { Produto } from '../produto.model'; // Importando Produto de produto.model.ts

@Component({
  selector: 'app-tela-produtos',
  templateUrl: './tela-produtos.component.html',
  styleUrls: ['./tela-produtos.component.css'],
})
export class TelaProdutosComponent {
  produtos: Produto[] = []; // Propriedade para armazenar os produtos

  constructor(private produtoService: ProdutoService) {
    // Inicializando a lista de produtos a partir do serviço
    this.produtos = this.produtoService.getProdutos();
  }
}
