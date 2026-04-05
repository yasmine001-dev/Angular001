import { Component, inject } from '@angular/core';
import { Products } from "../products/products";
import { ICategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { StaticCategories } from '../../services/static-categories';

@Component({
  selector: 'app-order',
  imports: [Products, FormsModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  selectedCatId: number = 0
  totalOrderPrice: number = 0
  private staticCategories = inject(StaticCategories)
  categories: ICategory[] = this.staticCategories.getAllCategories()

  setTotalOrderPrice(recievecOrderPrice: number) {
    this.totalOrderPrice = recievecOrderPrice
  }
}
