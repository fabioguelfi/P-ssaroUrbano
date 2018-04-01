import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasServices } from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasServices]
})
export class ComoUsarComponent implements OnInit {

  public descricao: String

  constructor(private route: ActivatedRoute, private ofertasServices: OfertasServices) { }

  ngOnInit() {

    this.route.parent.params.subscribe((parametros: Params) => {
      this.ofertasServices.getComoUsarOfertaPorId(parametros.id)
        .then((descricao: String) => {
          this.descricao = descricao
        })
    })
  }

}
