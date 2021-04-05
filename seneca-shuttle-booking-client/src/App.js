import React, {Component} from 'react'
import './App.css';
import Login from './logincomponents/Login'
import {Header} from './headercomponents/Header'
import {Selection} from './schedulecomponents/Selection'
import {BrowserRouter, Route} from 'react-router-dom'
import Signup from './Signupcomponent/Signup'
import Forgotpass from './forgotpassword/Forgotpass'
class App extends Component {

  
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          {/* <Login/> */}
          <Route path="/" component={Login} exact/>
          <Route path='/Selection' component={Selection} /> 
          <Route path='/Signup' component={Signup} /> 
          <Route path='/Forgotpass' component={Forgotpass} /> 
        </div>
      </BrowserRouter>
    );
  }
}


export default App;

