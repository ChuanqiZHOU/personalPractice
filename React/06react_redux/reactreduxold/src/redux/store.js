import { createStore } from 'redux'
import { allReducers } from './reducers/index.js'
import { applyMiddleware }  from 'redux'
import thunk from 'redux-thunk'
import countReducer from './reducers/count.js'
import {composeWithDevTools} from 'redux-devtools-extension'

const store = createStore(allReducers, composeWithDevTools( applyMiddleware(thunk)))

export default store