import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-order-compra',
  templateUrl: './order-compra.component.html',
  styleUrls: ['./order-compra.component.css'],
})

export class OrderCompraComponent implements OnInit {


  constructor(
  ) { }

  ngOnInit() {
  }

  public confirmarCompra(formulario: NgForm): void {
    console.log(formulario.value)
  }



}
