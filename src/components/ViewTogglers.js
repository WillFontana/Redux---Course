import React from 'react';
import FilterButtons from '../containers/FilterButtons';
import { VisibilityFilters } from '../actions';
import './viewtoggler.css';

function ViewTogglers() {
    return <div className="viewtoggler">
        <h3 className="text">
            Filtros de vizualização
      </h3>
        <div className="button-cards">
            <FilterButtons filter={VisibilityFilters.SHOW_ALL}>Todos os passageiros</FilterButtons>
            <FilterButtons filter={VisibilityFilters.SHOW_EMBARCADOS}>Todos que embarcaram</FilterButtons>
            <FilterButtons filter={VisibilityFilters.SHOW_ACTIVE}>Aguardando embarque</FilterButtons>
            <FilterButtons filter={VisibilityFilters.SHOW_PRIORITY}>Prioritários</FilterButtons>
        </div>
    </div>;
}

export default ViewTogglers;