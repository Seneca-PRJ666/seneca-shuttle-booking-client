import React,{Component} from 'react';

export class Booking extends Component {

render(){
  return ( 


        
<div className="container">
    <div className="row">
        <div className="col-sm">
            <label>Depart from:</label>
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Depart From
                <span className="caret"></span></button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">King</a>
                    <a className="dropdown-item" href="#">Markham</a>
                    <a className="dropdown-item" href="#">Newnham</a>
                    <a className="dropdown-item" href="#">York</a>
                </div>
            </div>
        </div>
        <div className="col-sm">
            <label>Arrive at:</label>
            <div className="dropdown">
                <button className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Arrive At
                <span className="caret"></span></button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">King</a>
                    <a className="dropdown-item" href="#">Markham</a>
                    <a className="dropdown-item" href="#">Newnham</a>
                    <a className="dropdown-item" href="#">York</a>
                </div>
            </div>
        </div>
        <div className="col-sm">
            <label>Date:</label>

        </div>
    </div>
    <hr>
    <label>Schedule</label>
    <div className="schedule">
        <table style="width:100%">
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
                <td><button class="btn btn-success booking-button" type="button">Book Now</button></td>
            </tr>
            <tr>
                <td>11 a.m.</td>
                <td>12 p.m.</td>
                <td>B</td>
                <td><button className="btn btn-secondary booking-button" type="button" disabled>Unavailable</button></td>
            </tr>
        </table>
    </div>
    </hr>
</div>


    
  
  )
}
}
