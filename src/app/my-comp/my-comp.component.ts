import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent {
  Products = [
    {
      name: 'abc',
      price: 11.1,

    }, {
      name: 'bvc',
      price: 22.2,
    }
    ,
    {
      name: 'dsad',
      price: 33.3,
    }
    ,
    {
      name: 'bvdsaqerc',
      price: 44.4,
    }
  ];
  Busket: any;
  Price = 0;
  constructor(private tmp: UsersService) {
    this.Busket = tmp.Products;
  }
  getPrice() {
    this.tmp.countPrice();
    this.Price = this.tmp.getPrice();
  }
  delProduct(i: number) {
    this.tmp.delProduct(i)
    this.getPrice();
  }
  ngOnInit() {
    this.getPrice();
  }
  cleanProducts() {
    this.tmp.cleanProducts();
    this.Busket = this.tmp.Products;
    this.getPrice();

  }
  addProduct(name: string, count: string, price: number) {
    if (parseInt(count) > 0) {
      this.tmp.addProduct(name, price, parseInt(count));
      this.Busket = this.tmp.Products;
      this.getPrice();
    }
  }
}
