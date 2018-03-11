import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('id: '+this.route.snapshot.params['id'])

    // ex segundo parametro via snapshot
    // console.log('subId: '+this.route.snapshot.params['subId'])
    // { path: 'oferta/:id/:subId', component: OfertaComponent }
  }

}
