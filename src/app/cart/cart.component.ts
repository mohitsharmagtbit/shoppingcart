import { Component,OnInit } from "@angular/core";
import {DataService} from '../data.service';
import * as Highcharts from 'highcharts';

@Component({
    selector:'app-cart',
    templateUrl:'./cart.component.html'
})

export class CartComponent implements OnInit{

    public options: any = {
        chart: {
          type: 'bar',
          height: 400
        },
        title: {
          text: 'Cart Items Bar Graph'
        },
        credits: {
          enabled: false
        },
        xAxis: {
          categories:[]
        },
        yAxis: {
          title: {
              text: 'Count'
          }
      },

      series: [{
        name:'Product',
        data: []
    }
    ]
}
      
    constructor(private data:DataService){    }

    productsInfo:any
    cartEmpty:boolean=true

    ngOnInit(){
        this.data.currentData.subscribe((product) => {
            this.productsInfo=product
            this.options.xAxis.categories = this.productsInfo.map(i=> i.title)                   
            this.options.series[0].data= this.productsInfo.map(i=>i.count)
          })         
            
          if(this.productsInfo.filter(product=> product.count > 0).length !== 0)
          {
            this.cartEmpty= false,
            Highcharts.chart('container', this.options)
          }            
        }
}