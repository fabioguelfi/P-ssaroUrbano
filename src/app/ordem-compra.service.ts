import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Pedido } from './shared/pedido.model';

@Injectable()

export class OrdemCompraService {

    constructor(
        private http: Http
    ){

    }

    public efetivarCompra(pedido: Pedido): void {
        console.log(pedido)
    }
}