import { Pedido } from './../shared/pedido.model';
import { OrdemCompraService } from './../ordem-compra.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-compra',
  templateUrl: './order-compra.component.html',
  styleUrls: ['./order-compra.component.css'],
  providers: [OrdemCompraService]
})

export class OrderCompraComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm

  constructor(
    private ordemCompraService: OrdemCompraService
  ) { }

  ngOnInit() {
  }

  public confirmarCompra(): void {
    let pedido: Pedido = new Pedido(
      this.formulario.value.endereco,
      this.formulario.value.numero,
      this.formulario.value.complemento,
      this.formulario.value.formaPagamento,
    )
    this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((idPedido: number) => console.log(idPedido))
  }

}
