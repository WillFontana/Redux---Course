import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { createStore } from 'redux';
// import { addPassageiro, togglePassageiro, increasePassageiroPriority } from './actions/index';

const store = createStore(rootReducer);

console.log(store.getState());

const unsubscribe = store.subscribe(() => console.log(store.getState()));

// store.dispatch(addPassageiro("Willyan Fontana", 1));
// store.dispatch(togglePassageiro(0));
// store.dispatch(increasePassageiroPriority(0));
// store.dispatch(increasePassageiroPriority(0));
// store.dispatch(increasePassageiroPriority(0));

unsubscribe();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);