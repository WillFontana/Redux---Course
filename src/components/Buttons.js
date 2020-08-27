import React from 'react';

// import { Container } from './styles';

function Buttons({ embarcado, onClick, children }) {
    return <button className={`filter-button ${embarcado && "-active"}`}
        onClick={onClick}>
        {children}
    </button>;
}

export default Buttons;