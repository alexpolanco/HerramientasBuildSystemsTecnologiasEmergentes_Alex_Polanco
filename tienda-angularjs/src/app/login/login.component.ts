import { Component, OnInit  } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  enviado = false;
  titulo = "Inicia Sesión";
  //email: string;
  //password: string;

  constructor(private authServicio: AuthService,
                private ruta: Router) {}

  ngOnInit() {
    this.formLogin = new FormGroup({
            'email': new FormControl('', [Validators.required, Validators.email]),
            'password': new FormControl('', [Validators.required])
        });
  }

  get f() { return this.formLogin.controls; }

  procesarFormularioLogin() {
    this.enviado = true;
    if (this.formLogin.invalid) {
      return;
    }
    this.authServicio.iniciarSesion(email.value, password.value)
    .then( (res) => {
      console.log(res);
      this.ruta.navigate(['inicio']);
    }).catch((err) => {
      console.log(err);
      this.ruta.navigate(['login']);
    });
  }

}
