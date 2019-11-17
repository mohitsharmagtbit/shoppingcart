import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private products = [
    {id: 0, loc: '../../../assets/prd1.jfif',count:0,title:'Item 1'},
    {id: 2, loc: '../../../assets/prd1.jfif',count:0,title:'Item 2'},
    {id: 3, loc: '../../../assets/prd1.jfif',count:0,title:'Item 3'},
    {id: 4, loc: '../../../assets/prd1.jfif',count:0,title:'Item 4'},
    {id: 5, loc: '../../../assets/prd1.jfif',count:0,title:'Item 5'}, 
];


  private productSource = new BehaviorSubject<any>(this.products);

  currentData = this.productSource.asObservable();
  
  changeCount(prodData: any) {
    this.productSource.next(prodData)
  }

  constructor() { }

}
