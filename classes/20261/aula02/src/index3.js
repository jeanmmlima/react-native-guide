import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Toogle />
  </React.StrictMode>
);

reportWebVitals();