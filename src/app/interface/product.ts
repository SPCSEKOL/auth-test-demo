export interface Product {
  id: string,
  title: string,
  price: number,
  inStock: boolean
}

export class ProductImpl implements Product{
  id: string;
  inStock: boolean;
  price: number;
  title: string;

  constructor(id: string,title: string,price: number,inStock: boolean) {
    this.id = id
    this.title = title
    this.price = price
    this.inStock = inStock
  }
}
