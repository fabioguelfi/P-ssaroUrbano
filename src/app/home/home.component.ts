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
    .then((ofertas: Array<Oferta>) => {
      this.ofertas = ofertas
    })
    .then( ofertas => {
      //fazer alguma tratativa
      console.log('primeiro then')
      return ofertas
    })
    .then( ofertas => {
      //outra trativa
      console.log('segundo then')
      return new Promise( (resolve2,reject2) => {
        setTimeout( () => {resolve2( ofertas ) }, 3000)
       })
    })
    .then( (ofertas: Oferta[]) => {
        console.log('terceiro then after 3 secounds because wait promise resolved')
        return ofertas
    } )
    .catch( param => console.log(param) )
  }

}
