import { Observable } from 'rxjs/Observable';
import { OfertasServices } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';

import '../util/rxjs-extensions'

import { Oferta } from '../shared/oferta.model';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasServices]
})

export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasServices: OfertasServices) { }

  ngOnInit() {

    this.ofertas = this.subjectPesquisa // retorno Oferta[]

      .debounceTime(1000) // executa a acao do switchmap apos 1 segundo

      .distinctUntilChanged() // para fazer pesquisas distintas

      .switchMap((termo: string) => {

        if (termo.trim() === '') {

          // retorna um observable de ofertas vazio
          return Observable.of(<Oferta[]>([]))

        }

        return this.ofertasServices.pesquisaOfertas(termo)

      })
      .catch((err: any) => {

        return Observable.of<Oferta[]>([])

      })
  }

  public pesquisa(termoDaBusca: string): void {

    this.subjectPesquisa.next(termoDaBusca)

  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }

}
