import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Welcome(props) {
  return <h1>Hello {props.name} </h1>
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Welcome name="Paulo" />
  </React.StrictMode>
);


reportWebVitals();

