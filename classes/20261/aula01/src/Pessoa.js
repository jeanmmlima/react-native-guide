import React from 'react';
import ReactDOM from 'react-dom';

export function Pessoa(props){
    return <div>
        <h3>Nome: {props.nome}</h3>
        <p>CPF: {props.cpf}</p>
        <p>Contato: {props.contato}</p>
        <p>email: {props.email}</p>
    </div>
}


