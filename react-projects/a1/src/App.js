import logo from './logo.svg';
import './App.css';

function Welcome(props) {
  return <h1>Hello {props.name} </h1>
}

function App() {
  return (
    <div>
      <Welcome name="Paulo" />
      <Welcome name="Maria" />
    </div>
  );
}

export default App;
