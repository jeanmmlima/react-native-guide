import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Clock2(props) {

  const [data, setData] = useState(new Date())

  useEffect(() => {
    const id = setInterval(() => setData(new Date(), 1000))
    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {data.toLocaleTimeString()} </h2>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clock2 />
  </React.StrictMode>
);

reportWebVitals();
