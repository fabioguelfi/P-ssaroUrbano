import { Component, OnInit } from '@angular/core';
import { OfertasServices } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasServices ]
})
export class HomeComponent implements OnInit {

  constructor(private ofertasService: OfertasServices) { }

  public ofertas: Array<Oferta>

  ngOnInit() {
    // this.ofertas = this.ofertasService.getOfertas();
    // console.log(this.ofertas)

    this.ofertasService.getOfertas2()
    .then((ofertas: Array<Oferta>) => this.ofertas = ofertas )
    .catch( param => console.log(param) )
  }

}
