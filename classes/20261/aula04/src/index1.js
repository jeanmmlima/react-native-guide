import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Toogle(props) {

  const [toogle, setToogle] = useState(true);
  return <button onClick={() => { setToogle(!toogle) }}>{toogle ? 'ON' : 'OFF'}</button>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Toogle />
  </React.StrictMode>
);

reportWebVitals();
