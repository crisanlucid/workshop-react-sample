import React from 'react';
import logo from './logo.svg';
import './App.css';
import ParentComponent from './ParentComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ParentComponent />
      </header>
    </div>
  );
}

export default App;
