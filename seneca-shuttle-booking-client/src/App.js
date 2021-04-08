import React, {Component} from 'react'
import './App.css';
import BookingConfirmation from "./Booking/BookingConfirmation.js";
import Login from './logincomponents/Login'
import {Header} from './headercomponents/Header.js'
import {Selection} from './schedulecomponents/Selection.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


class App extends Component {


    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    {/* <Login/> */}
                    <Switch>
                        <Route path="/" component={Login} exact></Route>
                        <Route path='/Selection' component={Selection}></Route>
                        <Route path="/booking/:id" component={BookingConfirmation}></Route>
                        <Route path='/Signup' component={Signup} /> 
                        <Route path='/Forgotpass' component={Forgotpass} /> 
               
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}


export default App;

