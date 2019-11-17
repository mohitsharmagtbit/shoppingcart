import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private data: DataService) {
  }

  products: any

  ngOnInit() {
    this.data.currentData.subscribe((product) => {
      this.products = product
    })
  }
  
  updateCount(productId: number, action: string) {
    if (action === 'increment') {
      this.products.find((product: any) => product.id === productId)['count'] += 1
    }
    else {
      this.products.find((product: any) => product.id === productId)['count'] -= 1
    }
    this.data.changeCount(this.products)

  }


}