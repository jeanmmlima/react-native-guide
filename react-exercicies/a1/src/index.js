import React from 'react';
import ReactDOM from 'react-dom';

function Multiplica(props){
  return <h1>A multiplicação é: {props.valorA * props.valorB}</h1>
}

function Divide(props){
  return <h1>A divisão é: {parseInt(props.valorA) / parseInt(props.valorB)}</h1>
}

function CalculadoraIMC(props) {
  const { peso, altura } = props;
  const imc = (peso / (altura * altura)).toFixed(2);

  let resultado = '';
  if (imc < 18.5) {
    resultado = 'Abaixo do Peso';
  } else if (imc >= 18.5 && imc < 24.9) {
    resultado = 'Peso Normal';
  } else if (imc >= 25 && imc < 29.9) {
    resultado = 'Sobrepeso';
  } else {
    resultado = 'Obesidade';
  }

  return (
    <div>
      <h2>Calculadora de IMC</h2>
      <p>Peso: {peso} kg</p>
      <p>Altura: {altura} m</p>
      <p>IMC: {imc}</p>
      <p>Resultado: {resultado}</p>
    </div>
  );
}



function App(){
  return(
    <div>
      {/* <Multiplica valorA="3" valorB="2" />
      <Divide valorA="6" valorB="3" /> */}
       <CalculadoraIMC peso={70} altura={1.75} />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
