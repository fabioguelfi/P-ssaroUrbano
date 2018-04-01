import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasServices } from '../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [OfertasServices]
})
export class OndeFicaComponent implements OnInit {

  public descricao: String

  constructor(private route: ActivatedRoute, private ofertasServices: OfertasServices) { }

  ngOnInit() {
    this.route.parent.params.subscribe((parametros: Params) => {
      this.ofertasServices.getOndeFicaPorId(parametros.id)
        .then((descricao) => {
          this.descricao = descricao
        })
    })
  }

}
