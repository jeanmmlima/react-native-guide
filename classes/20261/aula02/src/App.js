import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

function Clock(props) {
  const element = (
    <div><h1>Hora: {props.date.toLocaleTimeString()} </h1></div>
  )
  return element;
}

function tick() {
    <Clock date={new Date()} />,
    document.getElementById('root')
}

setInterval(tick, 1000);

export default App;
