import React from 'react';
import AddPassageiro from './containers/AddPassageiro';
import './global.css';
import VisiblePassageiros from './containers/VisiblePassageiros';
import ViewTogglers from './components/ViewTogglers';


function App() {
  return (
    <main className="App">
      <h2 className="title">
        Sistema de cadastro de passageiros
      </h2>
      <div className="card-component">
        <div className="action-cards">
          <AddPassageiro />
          <ViewTogglers />
        </div>
        <VisiblePassageiros />
      </div>
    </main>
  );
}

export default App;
