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

  constructor() { }

  ngOnInit() {

  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco
    console.log(endereco)
  }

  public atualizaNumero(numero: number): void {
    this.numero = numero
    console.log(numero)
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento
    console.log(complemento)
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento
    console.log(formaPagamento)
  }

}
