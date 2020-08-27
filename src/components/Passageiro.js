import React from 'react';
import { FaArrowUp, FaCheck, FaArrowDown } from 'react-icons/fa';

function Passageiro({ onClick, embarcado, text, prioridade, increase, decrease }) {
    return <li className={`list-item ${embarcado && "-risked"}`}>
        {text}
        <div className="less-info">
            Prioridade: {prioridade}
        </div>
        <button className={'list-button -priorize'} onClick={increase}>
            <FaArrowUp className="svg-icon" />
        </button>
        <button className={'list-button -unpriorize'} onClick={decrease}>
            <FaArrowDown className="svg-icon" />
        </button>
        <button className={`list-button -check ${embarcado && "-mark"}`} onClick={onClick}>
            <FaCheck className="svg-icon" />
        </button>
    </li>;
}

export default Passageiro;