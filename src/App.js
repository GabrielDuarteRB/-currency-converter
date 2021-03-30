import React from 'react';

import './App.css';
import Converter from './components/converter/converter.jsx';

function App() {
  return (
    <div className="App">
      <div className="box">
        <h1 className="box-title">Conversor para real</h1>
        <Converter/>
      </div>
    </div>
  );
}

export default App;
