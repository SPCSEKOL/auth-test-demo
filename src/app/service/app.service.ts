import { Injectable } from '@angular/core';
import {Product, ProductImpl} from "../interface/product";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  products: BehaviorSubject<Product[]>
  productsList: Product[] = []
  constructor() {
    this.productsList.push(new ProductImpl("1", "Pen", 100, true))
    this.productsList.push(new ProductImpl("2", "Pencil", 200, false))
    this.productsList.push(new ProductImpl("3", "Book", 500, true))
    this.products = new BehaviorSubject<Product[]>(this.productsList)
  }

  addProduct(product: Product): void {
    this.productsList.push(product)
    this.products.next(this.productsList)
  }
}
