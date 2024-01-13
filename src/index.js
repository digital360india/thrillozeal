import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {StateProvider} from "./StateProvider"
import reducer,{initialState} from './reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StateProvider initialState = {initialState} reducer = {reducer}>
  <App />
  </StateProvider>
);

reportWebVitals();
