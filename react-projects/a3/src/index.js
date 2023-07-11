import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = { nome: 'Gustavo', cor: 'branco' }
    this.handleChance = this.handleChance.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChance(event) {

    const nameEvt = event.target.name

    this.setState({ [nameEvt]: event.target.value })

  }

  handleSubmit(event) {

    alert(`O usuário de nome ${this.state.nome} escolheu a cor ${this.state.cor}`)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="nome" type="text" onChange={this.handleChance} value={this.state.nome}></input>
        <select name="cor" value={this.state.cor} onChange={this.handleChance}>
          <option value="laranja">Laranja</option>
          <option value="branco">Branco</option>
          <option value="verde">Verde</option>
          <option value="amarelo">Amarelo</option>
        </select>
        <input type="submit" value="Enviar!" />
      </form>
    )
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
);