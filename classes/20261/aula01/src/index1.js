import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

function tick() {
  const element = <h1>Hello World {Math.random()} </h1>

  root.render(
    <React.StrictMode>
      {element}
    </React.StrictMode>
  );

}
setInterval(tick, 1000);

reportWebVitals();

