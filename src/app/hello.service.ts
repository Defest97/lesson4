import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }
  hello(text:string)
  {
    console.log(text);
    
  }
}
