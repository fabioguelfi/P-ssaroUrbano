import { Component, OnInit } from '@angular/core';
import { OfertasServices } from '../ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let ofertas: OfertasServices = new OfertasServices()
    console.log(ofertas.getOfertas());
  }

}
