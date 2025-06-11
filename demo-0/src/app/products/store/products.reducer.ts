import { createReducer, on } from "@ngrx/store";
import { toggleProductCodeAction } from "./products.action";

export interface ProductsState {
  toggleProductCode: boolean;
}

const initialState: ProductsState = {
  toggleProductCode: false
}

export const toggleProductCodeReducer = createReducer(initialState,
  on(toggleProductCodeAction, (state) => ({
    ...state,
    toggleProductCode: !state.toggleProductCode
  }))
);
