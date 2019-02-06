import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) { }

  getProductos(){
    return this.http.get('https://db-tiendaenlinea-alexpolanco.firebaseio.com/productos/.json')
      //.map((response: Response)=> response.json())
  }

  setProductos(producto : any){
    const productos = JSON.stringify(producto);
    return this.http.post('https://db-tiendaenlinea-alexpolanco.firebaseio.com/productos/.json', productos)
      //.map((response: Response)=> response.json())
  }
}
