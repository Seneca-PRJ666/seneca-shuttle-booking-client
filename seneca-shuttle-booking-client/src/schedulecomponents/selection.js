import React,{Component} from 'react';
import {Dropdown} from "react-bootstrap";
export class Selection extends Component {

    render(){
        return ( 
            
          <div className="container">

            <div class="row" style = {{borderStyle: "solid", borderColor: 'red', padding: "0rem 2rem 2rem 6rem", fontWeight: 'bold'}} >
              <div class="col-sm">
                  <label >Depart from: </label>
                  {/* <div class="dropdown">
                      <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Depart From
                      <span class="caret"></span></button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="#">King</a>
                          <a class="dropdown-item" href="#">Markham</a>
                          <a class="dropdown-item" href="#">Newnham</a>
                          <a class="dropdown-item" href="#">York</a>
                      </div>
                  </div> */}
                  <select style = {{fontSize: "17px",backgroundColor: "#ffcccb", margin: '3rem 5rem 3rem 6rem', color: 'black', cursor: 'pointer', border: ' 2px  solid red'}}>

                      <option value="King">King</option>
                      <option value="Markham">Markham</option>
                      <option value="Newnham">Newnham</option>
                      <option value="York">York</option>
                  </select>
            
              </div>
              <div class="col-sm">
                  <label>Arrive at: </label>
                  {/* <div class="dropdown">
                      <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Arrive At
                      <span class="caret"></span></button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="#">King</a>
                          <a class="dropdown-item" href="#">Markham</a>
                          <a class="dropdown-item" href="#">Newnham</a>
                          <a class="dropdown-item" href="#">York</a>
                      </div>
                  </div> */}

                <select style = {{fontSize: "17px", backgroundColor: "#ffcccb", margin: '0rem 5rem 3rem 8rem', color: 'black', cursor: 'pointer', border: ' 2px  solid red'}}>

                <option value="King">King</option>
                <option value="Markham">Markham</option>
                <option selected value="Newnham">Newnham</option>
                <option value="York">York</option>
                </select>

              </div>
              <div className="col-sm">
                  <label>Date:</label>

              </div>
          </div>
{/* 
          <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Dropdown Button
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item><br></br>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item><br></br>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item><br></br>
  </Dropdown.Menu>
</Dropdown> */}
       
    
    <div className="schedule"  style = {{borderStyle: "solid", borderColor: 'red', padding: "0rem 2rem 2rem 6rem", fontWeight: 'bold'}}>

        <h2>Schedule</h2>
            <table  style = {{fontSize: "17px",backgroundColor: "#ffcccb",padding: '5rem 5rem', color: 'black', cursor: 'pointer', border: ' 2px  solid red'}}>
                <tr>
                    <th>Depart at:</th>
                    <th>Arrive by:</th>
                    <th>Route:</th>
                    <th>Booking</th>
                </tr>
                <tr>
                    <td>10 a.m.</td>
                    <td>11 a.m.</td>
                    <td>A</td>
                    <td><button className="btn btn-success booking-button" type="button">Book Now</button></td>
                </tr>
                <tr>
                    <td>11 a.m.</td>
                    <td>12 p.m.</td>
                    <td>B</td>
                    <td><button className="btn btn-secondary booking-button" type="button" disabled>Unavailable</button></td>
                </tr>
            </table>
    </div>
  
          
        </div>
        
      
        )
      }
    
}