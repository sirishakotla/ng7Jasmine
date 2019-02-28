import { Component } from '@angular/core';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'a7-unit-testing';
  products= ["1","2","3"];

  getProducts(){
    return this.products;
  }

  addProducts(product:string){
    this.products.push(product);
  }
}
