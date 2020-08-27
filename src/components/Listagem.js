import React from 'react';
import Passageiro from './Passageiro';
import './listagem.css';

function Listagem({ passageiros, togglePassageiro, increasePassageiro, decreasePassageiro }) {
  return <div className="list">
    {passageiros.map(passageiro => (
      <Passageiro
        key={passageiro.id}
        {...passageiro}
        increase={() => increasePassageiro(passageiro.id)}
        decrease={() => decreasePassageiro(passageiro.id)}
        onClick={() => togglePassageiro(passageiro.id)} />
    ))}
  </div>;
}

export default Listagem;