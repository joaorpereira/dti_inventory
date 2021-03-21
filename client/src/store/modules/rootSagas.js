import { all } from 'redux-saga/effects'

import products from './Product/productSagas'

export default function* rootSagas() {
  return yield all([])
}
