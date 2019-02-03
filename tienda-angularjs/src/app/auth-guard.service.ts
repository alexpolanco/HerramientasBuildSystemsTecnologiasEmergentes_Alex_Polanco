import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private ruta: Router, private authServicio: AuthService) { }

  canActivate() {
    if  ( this.authServicio.estaLogeado() ) {
      return true;
    }

    this.ruta.navigate(['']);
    return false;
  }

}
