import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import {Form,Col,Button, Spinner, Table} from "react-bootstrap";
function BookingConfirmation() {
    const {id} = useParams();
    const url = 'http://localhost:8080/schedule/bookings';

    const [booking, setBooking] = useState(null);

    useEffect(async () => {
        axios.post(url, {scheduleId: id})
            .then(response => {
                setBooking(response.data.data);
                // console.log(booking);
            })
            .catch(e => {
                console.log(e);
            })
    }, [])

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Start Time</th>
                    <th>Arrival Time</th>
                    <th>Route Name</th>
                </tr>
                </thead>
                <tbody>
                { booking?(
                    <tr key={booking._id}>
                        <td>{booking.date}</td>
                        <td>{booking.from}</td>
                        <td>{booking.to}</td>
                        <td>{booking.start}</td>
                        <td>{booking.arrive}</td>
                        <td>{booking.route_name}</td>
                    </tr>
                    ):( <Button variant="primary" disabled>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </Button>)
                }
                </tbody>
            </Table>
        </div>
    )

}

export default BookingConfirmation;