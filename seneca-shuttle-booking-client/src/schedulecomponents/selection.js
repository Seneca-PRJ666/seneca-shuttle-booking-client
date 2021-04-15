

import React, {Component} from 'react';

import {Form} from "react-bootstrap";
// import axios from 'axios';
import Schedule from "./Schedule.js";
// import form from 'react';
import styled, {keyframes, Keyframes} from 'styled-components';
import {bounce, rollIn, zoomIn} from 'react-animations';

const Bounce = styled.div`animation: 3s ${keyframes`${zoomIn}`}`;

export class Selection extends React.Component {

    constructor(props) {
        super(props);
        this.state = 
        {
            departure: '',
            arrival: '',
            date: ''
        };

        // this.handleChange = this.handleChange.bind(this);
        
    }

    componentDidMount(){
        // console.log('component mounted at Selection');

      }

    //   componentDidUpdate(){
    //       console.log('component did update' + this.state.departure + this.state.arrival + this.state.date);
    //   }
    // onChangeColor() {
    //     console.log(event.target.value);
    //   }

    render() {
        
        return (
            <Bounce>
            <div className="container">
                <div className="row" style={{
                    borderStyle: "solid",
                    borderColor: 'red',
                    padding: "0rem 2rem 2rem 6rem",
                    fontWeight: 'bold'
                }}>
                    <div className="col-sm">
                        <Form >
                     
                            <label>Depart from: 
                            <Form.Control
                                as="select"
                                custom
                                
                                value={this.state.departure} 
                                onChange={(e)=>{this.setState({departure: e.target.value}); console.log(`from departure ${JSON.stringify(this.state)}`)}}>                           
                                    <option value=""></option>
                                    <option value="king">King</option>
                                    
                                    <option value="markham">Markham</option>
                                    <option value="newnham">Newnham</option>
                                    <option value="york">York</option>
                        
                            </Form.Control>    
                           </label>
                           
                            <label>Arrive at: 
                            <Form.Control
                                as="select"
                                custom
                                
                                value={this.state.arrival} 
                                onChange={(e)=>{this.setState({arrival: e.target.value}); console.log(`From to ${JSON.stringify(this.state)}`)}} >                           
                                    <option value=""></option>
                                    <option value="king">King</option>
                                    
                                    <option value="markham">Markham</option>
                                    <option value="newnham">Newnham</option>
                                    <option value="york">York</option>
                        
                            </Form.Control>  

                            </label> 
                                               
               
                    <div className="col-sm">
                        <label>
                            Date: 
                     
                            <Form.Control autoFocus type="text"  value={this.state.date}
                            // value={this.state.date}
                            onChange={(e)=>{this.setState({date: e.target.value}); console.log(`From date ${JSON.stringify(this.state)}`)}} placeholder="Enter Date"/>
                        </label>
                    </div>
                </Form>    
                </div>    
                
                </div>

        
                <div>
                

                    { (this.state.departure==='' || this.state.arrival===''|| this.state.date==='') ?
                        (
                            
                            // <Schedule from='newnham' to='king' date='2021-4-4'/> 
                            <div>{console.log(`No data ${JSON.stringify(this.state)}`)}</div>
                            
                            
                        ) :    
                         (
                                // <Schedule from={this.state.departure} to={this.state.arrival} date={this.state.date}/>
                                <div>
                                {console.log(`Rendering data ${JSON.stringify(this.state)}`)}
                                <Schedule from={this.state.departure} to={this.state.arrival} date={this.state.date}/> 
                                </div>
                         )
                    }     
                                                  
                        
                    

                    {/* <Schedule from={this.state.departure} to={this.state.arrival} date={this.state.date}/> */}
                    {/* {this.state.departure ===' ' ? 'newham': this.state.departure}  */}
                </div>                    

                {/* </div> */}
        </div>
        </Bounce>
        )
    
    }

}