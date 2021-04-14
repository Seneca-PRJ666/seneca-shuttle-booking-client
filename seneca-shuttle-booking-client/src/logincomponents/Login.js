import React,{Component} from 'react';
import { withRouter} from 'react-router-dom';
import {Form,Col,Button, Row} from "react-bootstrap";
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
    axios.post("http://glacial-springs-31009.herokuapp.com/users/login",this.state);
    // ---if(status)
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

    <div className="justify-content-center">
      <div style = {{borderStyle: "solid", borderColor: 'red', padding: "0rem 2rem 2rem 2rem",margin: "5rem 8rem", fontWeight: 'normal'}}>
      <h3>Login</h3>
      <br></br>
      <Form onSubmit = {this.handleSubmit} >
      
          <Form.Group className="justify-content-center" as={Row} controlId="username" >
             
              <Form.Label column sm="2" >Username* </Form.Label>
              <Col sm="5">
              <Form.Control autoFocus type="text" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} placeholder="Enter Username"/>
              </Col>
          </Form.Group>
       

          <Form.Group className="justify-content-center" as={Row} controlId="password">
              <Form.Label column sm="2" >Password* </Form.Label>
              <Col sm="5" >
              <Form.Control type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} placeholder="Enter Password"/>
              </Col>
          </Form.Group>
       
        <br></br>

            {/* <div >
              <input type="submit" value="Login" style = {{fontSize: "17px",backgroundColor: "#ffcccb", margin: '1rem 5rem 2rem 6rem', color: 'black', cursor: 'pointer', border: ' 2px  solid red'}}  />
            </div> */}
            
            <Button variant="success" type="submit" value = "Login">
             Login
            </Button>

        </Form>

        <Form onSubmit = {this.handleSubmit3}>     
            {/* <div >
              <input type="submit" value="Forgot your password?"  style = {{fontSize: "17px",backgroundColor: "#ffcccb", margin: '1rem 5rem 2rem 6rem', color: 'black', cursor: 'pointer', border: ' 2px  solid red'}}  />
            </div> */}

            <br></br>
            <Button variant="danger" type="submit" value = "Forgot your password?">
            Forgot your password?
            </Button>
        </Form> 

        <Form onSubmit = {this.handleSubmit2}>     
            {/* <div >
              <input type="submit" value="Signup"  style = {{fontSize: "17px",backgroundColor: "#ffcccb", margin: '1rem 5rem 2rem 6rem', color: 'black', cursor: 'pointer', border: ' 2px  solid red'}}  />
            </div> */}
            <br></br>
            <Button variant="primary" type="submit" value = "Signup">
              Signup
            </Button>
        </Form> 

        </div>
    </div>
  )
}
}

export default withRouter(Login);
