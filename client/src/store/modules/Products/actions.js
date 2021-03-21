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
  return {
    type: types.REQUEST_REMOVE_PRODUCT,
    payload: id,
  }
}

export function requestRemoveProductSuccess(id) {
  return {
    type: types.REQUEST_REMOVE_PRODUCT_SUCCESS,
    payload: id
  }
}

export function requestRemoveProductFail() {
  return {
    type: types.REQUEST_REMOVE_PRODUCT_FAIL,
  }
}

export function requestCreateProduct(product) {
  return {
    type: types.REQUEST_CREATE_PRODUCT,
    payload: product,
  }
}

export function requestCreateProductSuccess() {
  return {
    type: types.REQUEST_CREATE_PRODUCT_SUCCESS,
  }
}

export function requestCreateProductFail() {
  return {
    type: types.REQUEST_CREATE_PRODUCT_FAIL,
  }
}
