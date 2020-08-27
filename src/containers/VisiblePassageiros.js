import { connect } from "react-redux";
import { togglePassageiro, VisibilityFilters, increasePassageiroPriority, decreasePassageiroPriority } from "../actions";
import Listagem from "../components/Listagem";

const getVisibleFilters = (passageiros, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return passageiros.slice(0).sort((a, b) => a.id - b.id);
        case VisibilityFilters.SHOW_ACTIVE:
            return passageiros.filter(t => !t.embarcado);
        case VisibilityFilters.SHOW_EMBARCADOS:
            return passageiros.filter(t => t.embarcado);
        case VisibilityFilters.SHOW_PRIORITY:
            return passageiros.slice(0).sort((a, b) => b.prioridade - a.prioridade );
        default:
            throw new Element('Filtro desconhecido: ' + filter);
    }
};

const mapStateToProps = state => ({
    passageiros: getVisibleFilters(state.passageiros, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    togglePassageiro: id => dispatch(togglePassageiro(id)),
    increasePassageiro: id => dispatch(increasePassageiroPriority(id)),
    decreasePassageiro: id => dispatch(decreasePassageiroPriority(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Listagem);