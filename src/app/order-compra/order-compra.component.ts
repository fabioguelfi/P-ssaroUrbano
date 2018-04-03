import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-order-compra',
  templateUrl: './order-compra.component.html',
  styleUrls: ['./order-compra.component.css'],
})

export class OrderCompraComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null),
    'numero': new FormControl(null),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null)
  })

  constructor(
  ) { }

  ngOnInit() {
  }

  public confirmarCompra(): void {
    console.log(this.formulario)
  }


}
