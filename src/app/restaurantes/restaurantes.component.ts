import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasServices } from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasServices]
})
export class RestaurantesComponent implements OnInit {

  constructor(private ofertaServices: OfertasServices) { }

  ngOnInit() {
    this.ofertaServices.getOfertasPorCategoria('restaurante')
    .then((ofertas: Oferta[]) => {
      console.log(ofertas)
    })
  }

}
