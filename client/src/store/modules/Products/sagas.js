import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import axios from '../../../services/api'

import * as actions from './actions'
import * as types from './types'

function* requestProductsList() {
  try {
    const { data } = yield call(axios.get, '/products')
    yield put(actions.requestProductsListSuccess(data))
  } catch (error) {
    toast.error('Os produtos não foram encontrados')
    yield put(actions.requestProductsListFail(error))
  }
}

function* removeProduct({ payload: id }) {
  try {
    const { data } = yield call(axios.delete, `/products/${id}`)
    yield put(actions.requestRemoveProductSuccess(data))
    toast.success('Produto removido com sucesso')
  } catch (error) {
    toast.error('O produto não foi encontrado')
    yield put(actions.requestProductsListFail(error))
  }
}

export default all([
  takeLatest(types.REQUEST_PRODUCTS_LIST, requestProductsList),
  takeLatest(types.REQUEST_REMOVE_PRODUCT, removeProduct),
])
