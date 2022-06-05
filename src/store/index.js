import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { productReducer } from './reducers/productReducers'

const initialState = {
  product: localStorage.getItem('product')
    ? JSON.parse(localStorage.getItem('product'))
    : { loading: true, product: {} },
}

const reducer = combineReducers({
  product: productReducer,
})
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk)),
)

export default store
