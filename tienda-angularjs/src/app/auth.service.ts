import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

  private usuario: Observable<firebase.User>;
  private detalleUsuario: firebase.User = null;

  constructor(private _firebaseAuth: AngularFireAuth, private ruta: Router) {
      this.usuario = _firebaseAuth.authState;

      this.usuario.subscribe(
        (usuario) => {
          if (usuario) {
            this.detalleUsuario = usuario;
            //console.log(this.detalleUsuario);
          }
          else {
            this.detalleUsuario = null;
          }
        }
      );
  }

  iniciarSesion(email, password) {
    const credential = firebase.auth.EmailAuthProvider.credential( email, password );
    return this._firebaseAuth.auth.signInWithEmailAndPassword( email, password )
  }

  estaLogeado() {
    if (this.detalleUsuario == null ) {
        return false;
    } else {
      return true;
    }
  }

  logout() {
    this._firebaseAuth.auth.signOut()
    .then((res) => this.ruta.navigate(['']));
  }

}
