import produce from 'immer'
import * as types from './types'

const INITIAL_STATE = {
  products: [],
  loading: false,
  success: false,
}

export function productsList(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.REQUEST_PRODUCTS_LIST: {
        draft.loading = true
        break
      }
      case types.REQUEST_PRODUCTS_LIST_SUCCESS: {
        draft.loading = false
        draft.success = true
        draft.products = action.payload.products
        break
      }
      case types.REQUEST_PRODUCTS_LIST_FAIL: {
        draft.loading = false
        draft.success = false
        draft.products = []
        break
      }
      default:
    }
  })
}

export function removeProduct(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case types.REQUEST_REMOVE_PRODUCT: {
        draft.loading = true
        break
      }
      case types.REQUEST_REMOVE_PRODUCT_SUCCESS: {
        const product_id = action.payload.id
        const products = state.products
        const newProducts = products.map(item => item.id !== product_id)
        draft.loading = false
        draft.success = true
        draft.products = newProducts
        break
      }
      case types.REQUEST_REMOVE_PRODUCT_FAIL: {
        draft.loading = false
        draft.success = false
        draft.products = []
        break
      }
      default:
    }
  })
}
