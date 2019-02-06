import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
//import { Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private productos: string[] = [];

    constructor(private httpService : HttpService){ }

    setProductos(producto: string){
      this.productos.push(producto);
      //this.logService.escribirLog('Se añadio el producto ' + producto);
      this.httpService.setProductos({producto: producto})
      .subscribe(
        (data: Response) => console.log(data)
      )
    }

    getProductos(){
      this.httpService.getProductos()
        .subscribe(
          (data: Response) => {
            console.log(data);
            let aux: any[] = [];
            for(let key in data){
              console.log(data[key]);
              aux.push(data[key]);
            }
            this.productos = aux
          }
        )
      return this.productos;
    }

  }
