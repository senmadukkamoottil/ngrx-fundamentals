import { createAction, createReducer, on } from '@ngrx/store';
import { ProductPageAction, ProductsAPIActions } from './products.actions';

export interface ProductsState {
  showProductCode: boolean;
  loading: boolean;
  products: [];
}

const intitialState: ProductsState = {
  showProductCode: true,
  loading: false,
  products: []
};

export const productsReducer = createReducer(
  intitialState,
  on(ProductPageAction.toggleShowProductCode, (state) => ({
    ...state,
    showProductCode: !state.showProductCode,
  })),
  on(ProductPageAction.loadProducts, (state) => ({
    ...state,
    loading: true
  })),
  on(ProductsAPIActions.productsLoadedSuccess, (state: any, {products}) => ({
    ...state,
    loading: false,
    products
  }))
);
