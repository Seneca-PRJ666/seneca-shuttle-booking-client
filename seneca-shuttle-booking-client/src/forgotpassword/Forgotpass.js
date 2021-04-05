import React,{Component} from 'react';
import { withRouter} from 'react-router-dom';
import {Form} from "react-bootstrap";


class Forgotpass extends Component {

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
      
          <div className="forgotpass"  >
            <div style = {{borderStyle: "solid", borderColor: 'red', padding: "0rem 2rem 2rem 6rem",margin: "5rem 8rem", fontWeight: 'normal'}}>
            <Form  onSubmit = {this.handleSubmit} >
      
              <h3>Forgot Password</h3>
              <Form.Group controlId="username" style = {{margin: '2rem 5rem 2rem 6rem', color: 'black'}}>
                  <Form.Label style = {{margin: '3rem 0.9rem 0rem 0rem'}}>Username* </Form.Label>
                  <Form.Control autoFocus type="text" value={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} placeholder="Enter Username"/>
              </Form.Group>
      
              <Form.Group controlId="password">
                  <Form.Label style = {{margin: '1rem 0rem 0rem 1rem', padding: '0rem 1rem 0rem 0rem'}}>Password* </Form.Label>
                  <Form.Control type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} placeholder="Enter Password"/>
              </Form.Group>
              <br></br>

              <Form.Group controlId="confirmpassword">
                  <Form.Label style = {{margin: '1rem 0rem 0rem 1rem', padding: '0rem 1rem 0rem 0rem'}}>Confirm Password* </Form.Label>
                  <Form.Control type="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} placeholder="Confirm Password"/>
              </Form.Group>
              <br></br>

                  <div >
                    <input type="submit" value="Signup" style = {{fontSize: "17px",backgroundColor: "#ffcccb", margin: '1rem 5rem 2rem 6rem', color: 'black', cursor: 'pointer', border: ' 2px  solid red'}}  />
                  </div>

    
              </Form>
      
              </div>
          </div>
        )
      }
  
  }

export default withRouter(Forgotpass);