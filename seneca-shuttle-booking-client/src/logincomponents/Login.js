import React,{Component} from 'react';
import { withRouter} from 'react-router-dom';
import {Form,Col,Button} from "react-bootstrap";
import axios from 'axios';
// import styled from 'styled-components';
// const URL = 'https://glacial-springs-31009.herokuapp.com/users/login'
// const URL = 'http://localhost:8080/users/login'

class Login extends Component {

  constructor(props){
    super(props);

    this.state={
        username: "",
        password:""
    };
    
     this.handleSubmit = this.handleSubmit.bind(this);
     this.handleSubmit2 = this.handleSubmit2.bind(this);
     this.handleSubmit3 = this.handleSubmit3.bind(this);
}


handleSubmit = event =>{
    event.preventDefault();
    axios.post("http://localhost:8080/users/login",this.state);
    this.props.history.push('/Selection');

}

handleSubmit2 = event=>{
  event.preventDefault();
  this.props.history.push('/Signup');
}
handleSubmit3 = event=>{
  event.preventDefault();
  this.props.history.push('/Forgotpass');
}

render(){

  return ( 

    <div className="Login"  >
      <div style = {{borderStyle: "solid", borderColor: 'red', padding: "0rem 2rem 2rem 2rem",margin: "5rem 8rem", fontWeight: 'normal'}}>
      <Form  onSubmit = {this.handleSubmit} >

        <h3>Login</h3>
        <Form.Group controlId="username" style = {{margin: '2rem 5rem 2rem 6rem', color: 'black'}}>
            <Form.Label style = {{margin: '3rem 0.9rem 0rem 0rem'}}>Username* </Form.Label>
            <Form.Control autoFocus type="text" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} placeholder="Enter Username"/>
        </Form.Group>

        <Form.Group controlId="password">
            <Form.Label style = {{margin: '1rem 0rem 0rem 1rem', padding: '0rem 1rem 0rem 0rem'}}>Password* </Form.Label>
            <Form.Control type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} placeholder="Enter Password"/>
        </Form.Group>
        <br></br>

            <div >
              <input type="submit" value="Login" style = {{fontSize: "17px",backgroundColor: "#ffcccb", margin: '1rem 5rem 2rem 6rem', color: 'black', cursor: 'pointer', border: ' 2px  solid red'}}  />
            </div>
            


        </Form>

        <Form onSubmit = {this.handleSubmit3}>     
            <div >
              <input type="submit" value="Forgot your password?"  style = {{fontSize: "17px",backgroundColor: "#ffcccb", margin: '1rem 5rem 2rem 6rem', color: 'black', cursor: 'pointer', border: ' 2px  solid red'}}  />
            </div>
        </Form> 

        <Form onSubmit = {this.handleSubmit2}>     
            <div >
              <input type="submit" value="Signup"  style = {{fontSize: "17px",backgroundColor: "#ffcccb", margin: '1rem 5rem 2rem 6rem', color: 'black', cursor: 'pointer', border: ' 2px  solid red'}}  />
            </div>
        </Form> 

        </div>
    </div>
  )
}
}

export default withRouter(Login);


