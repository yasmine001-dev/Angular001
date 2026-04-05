import { Component, EventEmitter, inject, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { IProduct } from '../../models/iproduct';
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe, DatePipe, LowerCasePipe, NgClass, NgStyle, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Highlight } from '../../directives/highlight';
import { ShortenPipe } from '../../pipes/shorten-pipe';
import { StaticProducts } from '../../services/static-products';

@Component({
  selector: 'app-products',
  imports: [FormsModule, CurrencyPipe,ShortenPipe
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products implements OnChanges{
  totalOrderPrice: number = 0
  @Input('sentSelectedCatId') recievedCatId:number=0
  //define event
 @Output() onTotalOrderPriceChanged:EventEmitter<number>=new EventEmitter<number>()

  private staticProducts=inject(StaticProducts)
  products: IProduct[]=this.staticProducts.getAllProducts()
  filteredProducts:IProduct[]=this.products

  // constructor(private staticProducts:StaticProducts){
  //  this.products=this.staticProducts.getAllProducts()
  //  this.filteredProducts=this.products
  // }


  buy(price: number, quantity: string) {
    this.totalOrderPrice += price * +quantity
    //fire the event
    this.onTotalOrderPriceChanged.emit(this.totalOrderPrice)
  }


  ngOnChanges(): void {
  this.filteredProducts= this.staticProducts.getProductsByCatId(this.recievedCatId)
  }
}
