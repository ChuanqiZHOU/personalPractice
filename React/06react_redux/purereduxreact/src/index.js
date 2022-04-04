import App from './App'
import React from 'react'
import * as ReactDOMClient from 'react-dom/client'
import store from './redux/store';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);
const { subscribe} = store;
root.render(<App />)
store.subscribe(()=>root.render(<App />))







// ReactDOM.render(<App/>, document.getElementById('root'))
