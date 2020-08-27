let nextPassageiroId = 0;

// Action para adicionar um passageiro
export const addPassageiro = (text, prioridade) => ({
    type: 'ADD_PASSAGEIRO',
    id: nextPassageiroId++,
    text
});

// Action para mudar a visualização dos passageiros
export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const togglePassageiro = id => ({
    type: 'TOGGLE_EMBARQUE',
    id
});

export const increasePassageiroPriority = id => ({
    type: 'INCREASE_PRIORIDADE',
    id
});

export const decreasePassageiroPriority = id => ({
    type: 'DECREASE_PRIORIDADE',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_EMBARCADOS: 'SHOW_EMBARCADOS',
    SHOW_ACTIVE: 'SHOW_ACTIVE',
    SHOW_PRIORITY: 'SHOW_PRIORITY'
};