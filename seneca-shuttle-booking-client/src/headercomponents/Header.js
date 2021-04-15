import React,{Component} from 'react';
import styled, {keyframes, Keyframes} from 'styled-components';
import {bounce, rollIn} from 'react-animations';

const Bounce = styled.div`animation: 3s ${keyframes`${rollIn}`}`;
export class Header extends Component {

render(){
  return ( 
    <div className="header" 
     style = {{backgroundColor: 'red', padding: '0.1rem 5rem'}}
    >
        
           <Bounce> <h1> Seneca Shuttle</h1> </Bounce>
            
        
    </div>
  ) 
}
}