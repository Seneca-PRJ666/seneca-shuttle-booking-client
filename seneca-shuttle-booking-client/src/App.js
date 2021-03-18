import React, {Component} from 'react'
import './App.css';
import Login from './logincomponents/Login'
import {Header} from './headercomponents/Header'
import {Booking} from './schedulecomponents/Booking'
import {Selection} from './schedulecomponents/Selection'
import {BrowserRouter, Route} from 'react-router-dom'


class App extends Component {

  
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          {/* <Login/> */}
          <Route path="/" component={Login} exact/>
          <Route path='/Selection' component={Selection} /> 
          
        </div>
      </BrowserRouter>
    );
  }
}


export default App;

