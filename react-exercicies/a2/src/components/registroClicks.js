import React, { Component } from 'react';

class RegistroDeClicks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      clickTimes: [],
    };
  }

  handleButtonClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    this.setState((prevState) => ({
      clicks: prevState.clicks + 1,
      clickTimes: [...prevState.clickTimes, currentTime],
    }));
  };

  render() {
    const { clicks, clickTimes } = this.state;

    return (
      <div className="RegistroDeClicks">
        <h1>Registro de Horário de Cliques</h1>
        <button onClick={this.handleButtonClick}>Clique aqui</button>
        <p>Total de Cliques: {clicks}</p>
        <ul>
          {clickTimes.map((time, index) => (
            <li key={index}>{time}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RegistroDeClicks;
