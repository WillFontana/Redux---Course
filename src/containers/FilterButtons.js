import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Buttons from "../components/Buttons";

const mapPropsToState = (state, ownProps) => ({
    embarcado: ownProps.filter === state.visibilityFilter
});

const mapDispatchToState = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
});

export default connect(mapPropsToState, mapDispatchToState)(Buttons);