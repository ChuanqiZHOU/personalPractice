import App from './App'
import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import store from './redux/store';
import { Provider } from 'react-redux'

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
root.render(
    <Provider store={store}>
     <App />
    </Provider>
)
// store.subscribe(()=>root.render(<App />))







// ReactDOM.render(<App/>, document.getElementById('root'))
