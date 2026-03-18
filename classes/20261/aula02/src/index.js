import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Clock(props) {
  const element = (
    <div><h1>Hora: {props.date.toLocaleTimeString()} </h1></div>
  )
  return element;
}

const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
  root.render(
  <React.StrictMode>
    <Clock date={new Date()}/>
  </React.StrictMode>
);
}

reportWebVitals();
setInterval(tick, 1000);