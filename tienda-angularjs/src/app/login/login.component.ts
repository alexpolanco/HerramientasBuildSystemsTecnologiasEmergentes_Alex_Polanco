import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';

import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  titulo = "Inicia Sesión";
  public email: string;
  public password: string;

  constructor(private authServicio: AuthService, private ruta: Router, public flashMensaje: FlashMessagesService) {}

  ngOnInit() {
  }

  procesarFormularioLogin(form) {
    this.authServicio.iniciarSesion(this.email, this.password)
    .then( (res) => {
      console.log(res);
      this.flashMensaje.show('Usuario logado correctamente.', {cssClass: 'alert-success', timeout: 4000});
      this.ruta.navigate(['inicio']);
    }).catch((err) => {
      console.log('error: ' + err);
      this.flashMensaje.show(err.message, {cssClass: 'alert-danger', timeout: 4000});
      this.ruta.navigate(['login']);
    });
  }

  iniciarSesionConGoogle() {
    this.authServicio.iniciarSesionConGoogle()
    .then((res) => {
        this.ruta.navigate(['inicio'])
      })
    .catch((err) => console.log(err));
  }

}
