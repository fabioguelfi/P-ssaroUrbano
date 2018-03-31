import { Observable } from 'rxjs/Observable';
import { OfertasServices } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';

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
      .debounceTime(1000)
      .switchMap((termo: string) => {
        console.log('requisicao http para api', termo)
        return this.ofertasServices.pesquisaOfertas(termo)
      })

    this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas))

  }

  public pesquisa(termoDaBusca: string): void {
    console.log('keyup caractere', termoDaBusca)
    this.subjectPesquisa.next(termoDaBusca)
  }

}
