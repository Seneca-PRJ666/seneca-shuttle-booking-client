
import axios from "axios";
import React from "react";
import {Table, Spinner, Button} from "react-bootstrap";
import {Link} from 'react-router-dom';
import BookingConfirmation from "../Booking/BookingConfirmation.js";


const url = 'http://localhost:8080/schedule?'

export default class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: [],
        };
        this.handleClick=this.handleClick.bind(this);
    }

    componentDidMount() {
        console.log(this.props);
        this.fetchData()
    }

    componentDidUpdate(prevProps){
        // console.log({new: this.props.from, prev: prevProps.from})
        console.log(this.props);
        if(this.props.from !== prevProps.from ||this.props.to !==prevProps.to || this.props.date !==prevProps.date)
        {
            this.fetchData()
        }
    }

    fetchData(){
        const constructed_url= `${url}from=${this.props.from.toLowerCase()}&to=${this.props.to.toLowerCase()}&date=${this.props.date}`
        axios.get(constructed_url)
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
        {console.log(`Schedule component rendered`)}
        return (
            <div>
                <Table striped bordered hover>
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
                        this.state.routes.length > 0 ? (this.state.routes.map((route) => {
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
                        })): <Button variant="primary" disabled>
                        <Spinner
                          as="span"
                          animation="grow"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        No Data Found!
                      </Button>
                    }
                    </tbody>
                </Table>
            </div>
        )
    }
}