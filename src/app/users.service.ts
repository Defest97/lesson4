import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor() { }
  Price=0;
  Products:any[]=[];
  addProduct(name:string,price:number,count:number)
  {
    const index=this.Products.findIndex(product=>product.name===name)
    if(index!==-1)
    {
      this.Products[index].count+=count;
    }      
    else
      this.Products.push({name,price,count});
  }
  delProduct(i:number)
  {
    this.Products.splice(i,1);
  }
  cleanProducts()
  {
    this.Products=[];
  }
  countPrice()
  {
    this.Price=0;
    for(let product of this.Products)
    {
      this.Price+=product.count*product.price;
    }
  }
  getProducts()
  {
    return this.Products;
  }
  getPrice()
  {
    return this.Price;
  }
}
