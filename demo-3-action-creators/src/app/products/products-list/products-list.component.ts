import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';
import { ProductsState } from '../state/products.reducer';
import { Store } from '@ngrx/store';
import { productShowProductCode, productsTotal } from '../state/products.selectors';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  @Input() products: Product[] | null = [];
  total$ = this.store.select(productsTotal);
  showProductCode$ = this.store.select(productShowProductCode);
  @Output() toggleProductCode = new EventEmitter<void>();

  constructor(private store: Store<ProductsState>) {

  }
}
