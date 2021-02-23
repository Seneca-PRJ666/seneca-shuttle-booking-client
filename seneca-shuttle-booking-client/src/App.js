import logo from './logo.svg';
import React from 'react'
import './App.css';
import {Login} from './logincomponents/Login'
import {Header} from './headercomponents/Header'


function App() {
  return (
    <div className="App">
      <Header/>
      <Login/>
    </div>
  );
}


export default App;
