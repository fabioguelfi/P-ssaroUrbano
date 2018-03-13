import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasServices } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasServices]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta

  constructor(
    private route: ActivatedRoute,
    private ofertasServices: OfertasServices) { }

  ngOnInit() {

    this.ofertasServices.getOfertaPorId(this.route.snapshot.params['id'])
      .then(( oferta: Oferta ) => {
        this.oferta = oferta
      })

      let tempo = Observable.interval(3000)

      tempo.subscribe((intervalo: number) => {
        console.log(intervalo)
      })

      // this.route.params.subscribe(
      //   (parametro: any) =>  { console.log(parametro) },
      //   (erro: any) => { console.log(erro) },
      //   () => console.log('processamento classificado como conluido')
      // )

    }

}
