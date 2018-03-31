import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { URL_API } from './app.api';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

@Injectable()
export class OfertasServices {

  constructor(private http: Http) { }

  public getOfertas(): Promise<Oferta[]> {
    //efetuar uma requisicao http
    return this.http.get(`${URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((resposta: Response) => resposta.json())
    //retornar uma promise com um array de ofertas[]
  }

  public getOfertasPorCategoria(categoria: String): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: Response) => resposta.json())
  }

  public getOfertaPorId(id: Number): Promise<Oferta> {
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((resposta: Response) => resposta.json()[0])
    //[0] or .shift() to extract object in indice 0 in array
  }

  public getComoUsarOfertaPorId(id: number): Promise<String> {
    return this.http.get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((resposta: Response) => {
        return resposta.json()[0].descricao
      })
  }

  public getOndeFicaPorId(id: number): Promise<String> {
    return this.http.get(`${URL_API}/onde-fica?id=${id}`)
      .toPromise()
      .then((resposta: Response) => {
        return resposta.json()[0].descricao
      })
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
      .retry(10)
      .map((resposta: Response) => resposta.json())
  }

}
