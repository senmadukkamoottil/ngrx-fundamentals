import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductsState } from "./products.reducer";

export const selectProductsState = createFeatureSelector<ProductsState>('products');

export const selectProducts = createSelector(selectProductsState, (products) => products.products);

export const productsLoading = createSelector(selectProductsState, (products) => products.loading);

export const productShowProductCode = createSelector(selectProductsState,
  (product) => product.showProductCode
);

export const productsTotal = createSelector(selectProducts,
  (products) => {
    return products.reduce((total, product ) => total + product.price,0);
  }
)
