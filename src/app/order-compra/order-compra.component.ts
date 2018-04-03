import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-compra',
  templateUrl: './order-compra.component.html',
  styleUrls: ['./order-compra.component.css'],
})

export class OrderCompraComponent implements OnInit {

  @ViewChild('formulario') public formulario: NgForm

  constructor(
  ) { }

  ngOnInit() {
  }

  public confirmarCompra(): void {
    console.log(this.formulario.value)
  }

}
