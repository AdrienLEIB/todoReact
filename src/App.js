import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './component/todo'
import Trombinoscope from './component/trombinoscope'

function App() {
  return (
    <div className="App">
      <Todo/>
      <Trombinoscope/>
    </div>
  );
}

export default App;
