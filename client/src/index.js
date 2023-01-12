import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/store/index';

///para deploy
axios.defaults.baseURL= 'https://pi-countries-back-ten.vercel.app/' || "http://localhost:3001"; //react para detectar q sea variable de entorno necesita empezar con REACT_APP
/////////////////////////////////////////////////////////////////////////////

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
     <BrowserRouter>
       <App />
     </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
