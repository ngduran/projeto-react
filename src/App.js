import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  
  const name = 'Norberto';

  return (
    <div className="App">
      <h2>Alterando o JSX</h2>
      <p>Olá, {name}</p>
      <HelloWorld />
      <SayMyName nome='Norberto'/>
      <SayMyName nome='Keyla'/>
      <SayMyName nome={name}/>
      <Pessoa nome="Norberto" idade="50" profissao="Programador" foto="https://via.placeholder.com/150" />

    </div>
  );
}

export default App;
