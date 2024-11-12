import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastroProdutosComponent } from './tela-cadastro-produtos.component';

describe('TelaCadastroProdutosComponent', () => {
  let component: TelaCadastroProdutosComponent;
  let fixture: ComponentFixture<TelaCadastroProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TelaCadastroProdutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaCadastroProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
