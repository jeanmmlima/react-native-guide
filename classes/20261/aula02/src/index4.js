import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const numbers = [1, 2, 3, 4, 5, 6, 7]

const listItems = numbers.map((number) => {
  return <li>{number}</li>
  //return <li key={index}>{number}</li>
})

const element = listItems


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    {element}
  </React.StrictMode>
);

reportWebVitals();