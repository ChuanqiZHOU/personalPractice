import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './cssForTabBar.css'
import { BrowserRouter } from 'react-router-dom'
//import react-virtualized
import 'react-virtualized/styles.css'
import './utils/url.js'
import App from './App';



ReactDOM.render(
  
    <BrowserRouter initialEntries={["/home"]}>
      <App />
    </BrowserRouter>,

  document.getElementById("root")
);


