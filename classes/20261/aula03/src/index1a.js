import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = { value: 'React!' }
    this.handleChance = this.handleChance.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChance(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('Um novo evento foi enviado: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form>
        <input onChange={this.handleChance} value={this.state.value} />
        <input type="submit" value="Enviar!" />
      </form>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>
);

reportWebVitals();
