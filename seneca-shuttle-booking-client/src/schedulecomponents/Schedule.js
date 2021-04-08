import axios from "axios";
import React from "react";
import {Button} from "react-bootstrap";
import {Link} from 'react-router-dom';
import BookingConfirmation from "../Booking/BookingConfirmation.js";


const url = 'http://localhost:8080/schedule?'

export default class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {routes: []};
        this.handleClick=this.handleClick.bind(this);
    }

    componentDidMount() {
        axios.get(url + `from=${this.props.from}&to=${this.props.to}&date=${this.props.date}`)
            .then(response => {
                this.setState({routes: response.data});
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    handleClick(id){
        //make network call
        // if successful render confirmation page
        //else show error
        <BookingConfirmation/>
    }

    formatTime(value){
        const time= new Date(value);
        return time.toDateString();
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Start Time</th>
                            <th>Arrival Time</th>
                            <th>Route Name</th>
                            <th>Available Seat</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.routes.map((route) => {
                            return (
                                <tr key={route._id}>
                                    <td>{this.formatTime(route.date)}</td>
                                    <td>{route.start}</td>
                                    <td>{route.arrive}</td>
                                    <td>{route.route_name}</td>
                                    <td>{route.available_seat}</td>
                                    <td><Link to={`/booking/${route._id}`}>Book</Link></td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}