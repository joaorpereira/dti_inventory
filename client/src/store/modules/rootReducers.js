import { combineReducers } from 'redux'

import productsReducers from './Products/reducers'

export default combineReducers({
  products: productsReducers,
})
