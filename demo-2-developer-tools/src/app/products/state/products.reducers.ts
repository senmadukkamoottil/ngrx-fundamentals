import { createReducer, on } from "@ngrx/store";
import { ToggleCodeActions } from "./products.actions";

export interface Products {
    showProductCode: boolean;
}

const initialState = {
    showProductCode: false
}

export const ToggleProductCodeReducers = createReducer(
    initialState, 
    on(ToggleCodeActions, (state) => ({
        ...state,
        showProductCode: !state.showProductCode
    })));