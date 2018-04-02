import { OrdemCompraService } from './../ordem-compra.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-compra',
  templateUrl: './order-compra.component.html',
  styleUrls: ['./order-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrderCompraComponent implements OnInit {

  public endereco: string = ''
  public numero: number = null
  public complemento: string = ''
  public formaPagamento: string = ''

  // controle de validacao dos campos
  public enderecoValido: boolean
  public numeroValido: boolean
  public complementoValido: boolean
  public formaPagamentoValido: boolean

  // estados primitivos dos campos (pristine)
  public enderecoEstadoPrimitivo: boolean = true
  public numeroEstadoPrimitivo: boolean = true
  public complementoEstadoPrimitivo: boolean = true
  public formaPagamentoEstadoPrimitivo: boolean = true

  // controlar botao confirmar compra
  public formEstado: string = 'disabled'

  constructor(
    private ordemCompraService: OrdemCompraService
  ) { }

  ngOnInit() {
    //this.ordemCompraService.efetivarCompra()
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco
    //console.log(endereco)

    this.enderecoEstadoPrimitivo = false

    // se a string for maior que 3
    if (this.endereco.length > 3) {
      this.enderecoValido = true
    } else {
      this.enderecoValido = false
    }

    this.habilitaForm()

  }

  public atualizaNumero(numero: number): void {
    this.numero = numero
    //console.log(numero)

    this.numeroEstadoPrimitivo = false

    if (numero) {
      this.numeroValido = true
    } else {
      this.numeroValido = false
    }

    this.habilitaForm()

  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento
    //console.log(complemento)

    this.complementoEstadoPrimitivo = false

    if (complemento.length >= 4) {
      this.complementoValido = true
    } else {
      this.complementoValido = false
    }

    this.habilitaForm()
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento
    //console.log(formaPagamento)

    this.formaPagamentoEstadoPrimitivo = false

    if (formaPagamento) {
      this.formaPagamentoValido = true
    } else {
      this.formaPagamentoValido = false
    }

    this.habilitaForm()
  }

  public habilitaForm(): void {
    if (this.enderecoValido === true && this.numeroValido === true && this.formaPagamentoValido === true) {
      this.formEstado = ''
    } else {
      this.formEstado = 'disabled'
    }
  }

}
