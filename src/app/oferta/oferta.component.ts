import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasServices } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import CarrinhoService from '../carrinho.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasServices, CarrinhoService]
})

export class OfertaComponent implements OnInit, OnDestroy {

  public oferta: Oferta

  constructor(
    private route: ActivatedRoute,
    private ofertasServices: OfertasServices,
    private carinhoService: CarrinhoService
  ) { }

  ngOnInit() {

    this.route.params.subscribe((parametros: Params) => {

      this.ofertasServices.getOfertaPorId(parametros.id)
        .then((oferta: Oferta) => {
          this.oferta = oferta
        })

    })

  }

  ngOnDestroy() {

  }

  public adicionarItemCarrinho(oferta: Oferta): void {
    console.log(oferta)
    this.carinhoService.incluirItem(oferta)
  }

}
