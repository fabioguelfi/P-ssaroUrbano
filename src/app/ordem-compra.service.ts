import { URL_API } from './app.api';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Pedido } from './shared/pedido.model';

@Injectable()

export class OrdemCompraService {

    constructor(
        private http: Http
    ){

    }

    public efetivarCompra(pedido: Pedido): Observable<any> {

        let headers: any = new Headers()

        headers.append('Content-type', 'application/json')

        return this.http.post(
            `${URL_API}/pedidos`, 
            pedido,
            new RequestOptions({ headers: headers })
        )
        .map((res: Response) => res.json().id )
    }
}