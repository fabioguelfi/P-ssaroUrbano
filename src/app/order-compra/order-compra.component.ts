import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-compra',
  templateUrl: './order-compra.component.html',
  styleUrls: ['./order-compra.component.css']
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

  constructor() { }

  ngOnInit() {

  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco
    //console.log(endereco)

    // se a string for maior que 3
    if (this.endereco.length > 3) {
      this.enderecoValido = true
    } else {
      this.enderecoValido = false
    }

  }

  public atualizaNumero(numero: number): void {
    this.numero = numero
    //console.log(numero)

    if (numero < 9999) {
      this.numeroValido = true
    } else {
      this.numeroValido = false
    }

  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento
    //console.log(complemento)
    if (complemento.length >= 4) {
      this.complementoValido = true
    } else {
      this.complementoValido = false
    }
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento
    //console.log(formaPagamento)
    if (formaPagamento) {
      this.formaPagamentoValido = true
    } else {
      this.formaPagamentoValido = false
    }
  }

}
