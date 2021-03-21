import * as types from './types'

export function requestProductsList() {
  return {
    type: types.REQUEST_PRODUCTS_LIST,
  }
}

export function requestProductsListSuccess(products) {
  return {
    type: types.REQUEST_PRODUCTS_LIST_SUCCESS,
    payload: { products },
  }
}

export function requestProductsListFail() {
  return {
    type: types.REQUEST_PRODUCTS_LIST_FAIL,
    payload: {},
  }
}

export function requestRemoveProduct(id) {
  console.log('action', id)
  return {
    type: types.REQUEST_REMOVE_PRODUCT,
    payload: id,
  }
}

export function requestRemoveProductSuccess() {
  return {
    type: types.REQUEST_REMOVE_PRODUCT_SUCCESS,
    // payload: { products },
  }
}

export function requestRemoveProductFail() {
  return {
    type: types.REQUEST_REMOVE_PRODUCT_FAIL,
    // payload: {},
  }
}
