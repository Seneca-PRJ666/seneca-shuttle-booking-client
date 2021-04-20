import axios from "axios";
import React, {useEffect, useState} from "react";
import {Link, useParams} from 'react-router-dom';
import {Form,Col,Button, Spinner, Table} from "react-bootstrap";
import styled, {keyframes, Keyframes} from 'styled-components';
import {bounce, rollIn, zoomIn} from 'react-animations';

const Bounce = styled.div`animation: 3s ${keyframes`${zoomIn}`}`;

function BookingConfirmation(props) {
    const {id} = useParams();
    const url = 'http://glacial-springs-31009.herokuapp.com/schedule/bookings';

    const [booking, setBooking] = useState(null);


//    function handleSubmit(){
     
//         return ({
//             <Link to='/Signup'><Link>
//             })
//      }   
// function ProfileForm(props) {
//     const history = useHistory();
//     const onSubmit = (data, e) => {
//        e.target.reset();
//        history.push({
//           pathname:  "/OnSubmit",
//           state: {
//             response: messageFromServer 
//           } 
//        });
//     }
//   }

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
        <Bounce>
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
                        <td>{new Date (booking.date).toDateString()}</td>
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
                
                <Link to ="/Selection" type="submit" value = "Forgot your password?">
                <Button  variant="danger"> Cancel </Button>
                </Link>
                
        </div>
        </Bounce>
    )

}

export default BookingConfirmation;