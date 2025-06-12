import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { sumProducts } from 'src/app/utils/sum-products';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import { ProductPageAction, ProductsAPIActions } from '../state/products.actions';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent {
  products$ = this.store.select( (state: any) => state.products.products);
  total = 0;
  loading$ = this.store.select((state: any) => state.products.loading);
  showProductCode$ = this.store.select(
    (state: any) => state.products.showProductCode
  );
  errorMessage = '';

  constructor(private productsService: ProductsService, private store: Store) {}

  ngOnInit() {
    this.getProducts();
    this.store.subscribe((state) => console.log({ state }));
  }

  getProducts() {
    this.store.dispatch(ProductPageAction.loadProducts());
    this.productsService.getAll().subscribe({
      next: (products) => {
        this.products$ = this.store.select( (state: any) => state.products.products);
        this.total = sumProducts(products);
        this.loading$ = this.store.select((state: any) => state.products.loading);
        this.store.dispatch(ProductsAPIActions.productsLoadedSuccess({products}));
      },
      error: (error) => (this.errorMessage = error),
    });
  }

  toggleShowProductCode() {
    this.store.dispatch({ type: '[Products Page] Toggle Show Product Code' });
  }
}
