import logo from './logo.svg';
import './App.css';
import { Pessoa } from './Pessoa';

function App() {
  return (
    <div>
      <Pessoa nome="Jean" cpf="000.000.000-00" contato="(84) 90000-0000" email="meuemail.com" />
    </div>
  );
}

export default App;
