import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { URL_API } from './app.api';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OfertasServices {

  constructor(private http: Http) { }

  public getOfertas(): Promise<Oferta[]> {
    //efetuar uma requisicao http
    return this.http.get(`${URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((resposta: any) => resposta.json())
    //retornar uma promise com um array de ofertas[]
  }

  public getOfertasPorCategoria(categoria: String): Promise<Oferta[]> {
    return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((resposta: any) => resposta.json())
  }

  public getOfertaPorId(id: Number): Promise<Oferta> {
    return this.http.get(`${URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((resposta: any) => resposta.json()[0])
    //[0] or .shift() to extract object in indice 0 in array
  }

  public getComoUsarOfertaPorId(id: number): Promise<String> {
    return this.http.get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((resposta: any) => {
        return resposta.json()[0].descricao
      })
  }

}
