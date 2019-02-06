import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos : string[] = [];
  formBuscar: FormGroup;
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.productos = this.dataService.getProductos();
    
    this.formBuscar = new FormGroup({
            'buscador': new FormControl('', [Validators.required])
        });
    this.dataService.getProductos();//this.onUpdate();
  }

  get f() { return this.formBuscar.controls; }

  buscarProducto(){

  }

  onUpdate(){
    this.productos = this.dataService.getProductos();
  }
}
