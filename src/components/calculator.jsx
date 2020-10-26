import React, { Component } from 'react';
import '../styles/calculator.css';

export default class calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            billTotal: 0,
            servicePerc: null,
            totalCustomers: 0
        }
    }

    onTotalChange = (event) => {
        this.setState({ billTotal: event.target.value });
    }

    onServiceRating = (event) => {
        this.setState({ servicePerc: event.target.value })
    }

    render() {
        return (
            <div className="container">
                <div className="calculator">

                    <div className="bill-input">
                        <label htmlFor="bill-total">Bill Total : </label>
                        <br></br>
                        <br></br>
                        <input type="text" onChange={this.onTotalChange} />
                    </div>

                    <div className="service-rating">
                        <label htmlFor="service-rating"> How was your service? : </label>
                        <br></br>
                        <br></br>
                        <select onChange={this.onServiceRating}>
                            <option value="">-- select --</option>
                            <option value="30%">30% - Superb</option>
                            <option value="25%">25% - Great</option>
                            <option value ="10%">10% - Okay</option>
                            <option value="5%">5% - Bad</option>
                        </select>
                        {this.state.servicePerc}
                    </div>

                </div>
            </div>
        )
    }
}
