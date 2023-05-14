import React from 'react';
import ReactDOM from 'react-dom/client';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
// //Font Awesome CDN
// import '../node_modules/font-awesome/css/font-awesome.min.css'; 





//
import $ from 'jquery';
import Popper from 'popper.js';
//

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
