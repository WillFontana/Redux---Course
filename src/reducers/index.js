import { combineReducers } from 'redux';
import passageiros from './passageiros';
import visibilityFilter from './visibilityFilter';



export default combineReducers({
    passageiros,
    visibilityFilter    
})