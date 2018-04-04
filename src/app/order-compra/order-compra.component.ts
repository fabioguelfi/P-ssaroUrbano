import { OrdemCompraService } from './../ordem-compra.service';
import { Pedido } from './../shared/pedido.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarrinhoService } from '../carrinho.service';
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
  selector: 'app-order-compra',
  templateUrl: './order-compra.component.html',
  styleUrls: ['./order-compra.component.css'],
  providers: [OrdemCompraService]
})

export class OrderCompraComponent implements OnInit {

  public idPedidoCompra: number = undefined
  public itensCarrinho: ItemCarrinho[] = []

  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [Validators.required])
  })

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens()
  }

  public confirmarCompra(): void {
    let pedido: Pedido = new Pedido(
      this.formulario.value.endereco,
      this.formulario.value.numero,
      this.formulario.value.complemento,
      this.formulario.value.formaPagamento
    )
    console.log(pedido)
    this.ordemCompraService.efetivarCompra(pedido).subscribe(
      (idPedido: number) => {
        this.idPedidoCompra = idPedido
        console.log(this.idPedidoCompra)
      },
      (err) => {

      },
      () => {

      }
    )
  }


}
