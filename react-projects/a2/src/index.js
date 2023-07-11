import React from 'react';
import ReactDOM from 'react-dom';

class ClockClass extends React.Component {

  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    return (<div><h1>Hora: {this.state.date.toLocaleTimeString()} </h1></div>);
  };
}

class Toogle extends React.Component {

  constructor(props) {
    super(props)
    this.state = { isToogleOn: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      isToogleOn: !prevState.isToogleOn
    }))
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToogleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <ClockClass />,
//  <Toogle />,
  document.getElementById('root')
);