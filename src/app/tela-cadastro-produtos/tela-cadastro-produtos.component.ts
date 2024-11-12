// tela-cadastro-produtos.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto.model';

@Component({
  selector: 'app-tela-cadastro-produtos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tela-cadastro-produtos.component.html',
  styleUrls: ['./tela-cadastro-produtos.component.css'],
})
export class TelaCadastroProdutosComponent {
  novoProduto: Produto = {
    id: 0,
    nome: '',
    preco: 0,
    quantidade: 0,
  };

  constructor(private produtoService: ProdutoService) {}

  adicionarProduto() {
    this.produtoService.adicionarProduto(this.novoProduto);
    this.novoProduto = { id: 0, nome: '', preco: 0, quantidade: 0 }; // Limpar o formulário
  }
}
