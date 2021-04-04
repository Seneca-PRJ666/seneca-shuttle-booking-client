import React, {Component} from 'react';
import {Dropdown} from "react-bootstrap";
import axios from 'axios';
import Schedule from "./Schedule.js";


export class Selection extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row" style={{
                    borderStyle: "solid",
                    borderColor: 'red',
                    padding: "0rem 2rem 2rem 6rem",
                    fontWeight: 'bold'
                }}>
                    <div className="col-sm">
                        <div>

                        </div>
                        <label>Depart from: </label>
                        <select style={{
                            fontSize: "17px",
                            backgroundColor: "#ffcccb",
                            margin: '3rem 5rem 3rem 6rem',
                            color: 'black',
                            cursor: 'pointer',
                            border: ' 2px  solid red'
                        }}>

                            <option value="King">King</option>
                            <option value="Markham">Markham</option>
                            <option value="Newnham">Newnham</option>
                            <option value="York">York</option>
                        </select>

                    </div>
                    <div className="col-sm">
                        <label>Arrive at: </label>
                        <select style={{
                            fontSize: "17px",
                            backgroundColor: "#ffcccb",
                            margin: '0rem 5rem 3rem 8rem',
                            color: 'black',
                            cursor: 'pointer',
                            border: ' 2px  solid red'
                        }}>
                            <option value="King">King</option>
                            <option value="Markham">Markham</option>
                            <option defaultValue="Newnham">Newnham</option>
                            <option value="York">York</option>
                        </select>
                    </div>
                    <div className="col-sm">
                        <label>Date:</label>
                    </div>
                </div>
                <div className="schedule" style={{
                    borderStyle: "solid",
                    borderColor: 'red',
                    padding: "0rem 2rem 2rem 6rem",
                    fontWeight: 'bold'
                }}>

                    <h2>Schedule</h2>
                    <Schedule from='newnham' to='king' date='2021-04-04'/>
                </div>
            </div>
        )
    }

}