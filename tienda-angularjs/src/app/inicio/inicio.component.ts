import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
//import { BarraSuperiorComponent } from './barra-superior.component';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private authServicio: AuthService, private flashMensaje: FlashMessagesService) { }

  ngOnInit() {
    ///this.flashMensaje.show('Bienvenido!', { cssClass: 'alert-success', timeout: 5000 });
  }

}
