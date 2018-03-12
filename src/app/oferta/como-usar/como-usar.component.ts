import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    let id: number = this.route.parent.snapshot.params['id']
    this.ofertasServices.getComoUsarOfertaPorId(id)
    .then((descricao: String) => {
      this.descricao = descricao
    })
  }

}
