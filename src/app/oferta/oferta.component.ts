import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasServices } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
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

      //observable (observavel)
      let meuObservableTeste = Observable.create((observer: Observer<number>) => {
        observer.next(1)
        observer.next(2)
        observer.next(3)
        observer.next(4)
        observer.next(5)
        observer.next(6)
        observer.next(7)
        observer.complete()
      })

      //observable (observador)
      meuObservableTeste.subscribe(
        (resultado: number) => console.log(resultado + 10),
        (erro: String) => console.log(erro),
        () => console.log('a stream de eventos foi finalizada')
      )

      // let tempo = Observable.interval(3000)

      // tempo.subscribe((intervalo: number) => {
      //   console.log(intervalo)
      // })

      // this.route.params.subscribe(
      //   (parametro: any) =>  { console.log(parametro) },
      //   (erro: any) => { console.log(erro) },
      //   () => console.log('processamento classificado como conluido')
      // )

    }

}
