import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

function Form2(props) {

  const [nome, setNome] = useState('Gustavo');
  const [cor, setCor] = useState('branco');

  return (
    <form onSubmit={(event) => {
      alert(`O ${nome} escolheu a cor ${cor} `)
      event.preventDefault();
    }}>
      <input name="nome" type="text" onChange={(event) => setNome(event.target.value)} value={nome}></input>
      <select name="cor" value={cor} onChange={(event) => setCor(event.target.value)}>
        <option value="laranja">Laranja</option>
        <option value="branco">Branco</option>
        <option value="verde">Verde</option>
        <option value="amarelo">Amarelo</option>
      </select>
      <input type="submit" value="Enviar!" />
    </form>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form2 />
  </React.StrictMode>
);

reportWebVitals();
