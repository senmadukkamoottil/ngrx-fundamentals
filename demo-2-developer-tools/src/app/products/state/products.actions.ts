import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { Product } from "../product.model";

export const ProductPageAction = createActionGroup({
  source: '[Products page]',
  events: {
    'Toggle show product code': emptyProps(),
    'Load products': emptyProps(),
    'Add product': props<{product: Product}>(),
    'Update Product': props<{product: Product}>(),
    'Delete Product': props<{id: number}>()
  }
})

export const ProductsAPIActions= createActionGroup({
  source: '[Products API]',
  events: {
    'Products Loaded Success': props<{products: Product[]}>(),
    'Products Loaded Fail': props<{message: string}>(),
    'Product Add Success': props<{product: Product}>(),
    'Product Add Fail': props<{message: string}>(),
    'Product Update Success': props<{product: Product}>(),
    'Product Update Fail': props<{message: string}>(),
    'Product Delete Success': props<{id: number}>(),
    'Product Delete Fail': props<{message: string}>(),
  }
})
