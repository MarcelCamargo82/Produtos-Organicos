import { Component } from '@angular/core';
import { ProdutoService } from '../produto.service'; // Certifique-se de importar o serviço
import { Produto } from '../produto.model'; // Se você tiver um modelo Produto

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

  // Certifique-se de que a propriedade produtos está corretamente definida
  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  // Método para cadastrar um produto
  cadastrarProduto(): void {
    this.produtoService.adicionarProduto(this.novoProduto);
    // Atualiza a lista de produtos após adicionar
    this.produtos = this.produtoService.getProdutos();
    this.novoProduto = { nome: '', preco: 0, quantidade: 0 };
  }
}
