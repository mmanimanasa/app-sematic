import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Task from './components/Task';
import Div from './components/Div';
import Data from './components/Data';
import Trail from './components/Trail';
function App() {
  return (
    <div >
      <Trail />
      {/* <Header /> */}
      <Div />
    </div>
  );
}

export default App;
