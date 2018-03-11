import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasServices } from '../ofertas.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [OfertasServices]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Oferta[]

  constructor(private ofertaService: OfertasServices) { }

  ngOnInit() {
    this.ofertaService.getOfertasPorCategoria('diversao')
    .then((diversoes: any) => this.ofertas = diversoes)
  }

}
