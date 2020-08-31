import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Sign In</h1>
      <form>
        <h2>Usuario: </h2>
        <input type="text"></input>
        <h2>Contraseña: </h2>
        <input type="text"></input>
        <button>Entrar</button>
      </form>
      <p>¿Olvidaste la contraseña?</p>
      <p>Crear un nuevo usuario....</p>
      <button>Crear nuevo usuario</button>
    </div>
  );
}

export default App;
