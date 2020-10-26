import React, { Component } from 'react';
import '../styles/calculator.css';

export default class calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            billTotal: 0,
            servicePerc: 0,
            totalCustomers: 0
        }
    }

    onTotalChange = (event) => {
        this.setState({
            billTotal: event.target.value
        });
    }

    render() {
        return (
            <div className="container">
                <div className="calculator">

                    <div className="bill-input">
                        Bill Total: <input onChange={this.onTotalChange}></input>
                        {this.state.billTotal}
                    </div>

                </div>
            </div>
        )
    }
}
