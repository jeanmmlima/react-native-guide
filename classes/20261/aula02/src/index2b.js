import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

  //parte 2
  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    return (<div><h1>Hora: {this.state.date.toLocaleTimeString()} </h1></div>);
  };
}

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <ClockClass />
  </React.StrictMode>
);

reportWebVitals();