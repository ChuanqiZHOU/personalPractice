import { createStore } from 'redux'
import countReducer from './reducers'
import { applyMiddleware }  from 'redux'
import thunk from 'redux-thunk'
const store = createStore(countReducer, applyMiddleware(thunk))

export default store