import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [value, setValue] = useState(0);
  
  const increment = () => {
      setValue(value+1)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="wrapper">
          <button id="inc" onClick={increment}>
            Increment
          </button>  
          <p>
            {value}
          </p>
        </div>
      </header>
    </div>
  );
  
}

export default App;
