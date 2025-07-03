import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';
import { Store } from '@ngrx/store';
import { ToggleCodeActions } from '../state/products.actions';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  @Input() products: Product[] = [];
  @Input() total = 0;
  // showProductCode = false;
  showProductCode$ = this.store.select((state: any) => {
    return state.products.showProductCode
  });

  constructor(private store: Store<Product>) {

  }

  toggleProductCode() {
    this.store.dispatch(ToggleCodeActions())
  }
}
