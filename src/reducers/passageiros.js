const passageiros = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PASSAGEIRO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    prioridade: 1,
                    embarcado: false
                }
            ];
        case 'TOGGLE_EMBARQUE':
            return state.map(passageiro =>
                passageiro.id === action.id ? { ...passageiro, embarcado: !passageiro.embarcado } : passageiro
            );
        case 'INCREASE_PRIORIDADE':
            return state.map(passageiro =>
                passageiro.id === action.id ? { ...passageiro, prioridade: passageiro.prioridade + 1 } : passageiro
            );
        case 'DECREASE_PRIORIDADE':
            return state.map(passageiro =>
                passageiro.id === action.id && passageiro.prioridade > 1 ? { ...passageiro, prioridade: passageiro.prioridade - 1 } : passageiro
            );
        default:
            return state;
    }
}

export default passageiros;