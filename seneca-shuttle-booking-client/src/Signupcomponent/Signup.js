import React,{Component} from 'react';
import { withRouter} from 'react-router-dom';
import {Form,Col,Button, Row} from "react-bootstrap";
import styled, {keyframes, Keyframes} from 'styled-components';
import {bounce, rollIn, zoomIn} from 'react-animations';

const Bounce = styled.div`animation: 3s ${keyframes`${zoomIn}`}`;

class Signup extends Component {

    constructor(props){
      super(props);
  
      this.state={
          username: "",
          password:"",
          confirmpassword:""
      };
      
       this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit = event =>{
        event.preventDefault();
        this.props.history.push('/');
        

    }

    render(){

        return ( 
          <Bounce>
          <div className="Signup"  >
            <div style = {{borderStyle: "solid", borderColor: 'red', padding: "0rem 2rem 2rem 6rem",margin: "5rem 8rem", fontWeight: 'normal'}}>
            <Form  onSubmit = {this.handleSubmit} >
      
              <h3>Signup</h3>
              <br></br>
              <Form.Group className="justify-content-center" as={Row} controlId="username" >
                  <Form.Label column sm="1" >Username* </Form.Label>
                  <Col sm="7">
                    <Form.Control autoFocus type="text" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} placeholder="Enter Username"/>
                  </Col>
              </Form.Group>
              <br></br>
              <Form.Group className="justify-content-center" as={Row}  controlId="password">
                  <Form.Label column sm="1" >Password* </Form.Label>
                  <Col sm="7">
                    <Form.Control type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} placeholder="Enter Password"/>
                  </Col>
              </Form.Group>
              <br></br>

              <Form.Group  className="justify-content-center" as={Row} controlId="confirmpassword">
                  <Form.Label column sm="1" >Confirm Password* </Form.Label>
                  
                  <Col sm="7">
                    <Form.Control type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} placeholder="Confirm Password"/>
                  </Col>
              </Form.Group>
              <br></br>

              <Button variant="primary" type="submit" value = "Signup">
                Sign up
              </Button>
    
              </Form>
      
              </div>
          </div>
          </Bounce>
        )
      }
  
  }

export default withRouter(Signup);