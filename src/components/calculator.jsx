import React, { Component } from 'react';
import '../styles/calculator.css';

export default class calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            billTotal: 0,
            servicePerc: null,
            totalCustomers: 0,
            tip: 0
        }
    }

    onTotalChange = (event) => {
        this.setState({ billTotal: event.target.value });
    }

    handleEventChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    tipCaluclate = () => {
        const answerDiv = document.querySelector(".answer");
        let answer = document.createElement("span");
        answer.innerHTML = "";
        const bill = this.state.billTotal;
        const serviceRating = this.state.servicePerc;
        const partyCount = this.state.totalCustomers;

        this.setState({ 
            tip: (+bill * +serviceRating / +partyCount)
        });
    }

    render() {
        return (
            <div className="container">
                <div className="calculator">

                    <div className="bill-input">
                        <label htmlFor="bill-total">Bill Total (Leave out the `$` sign)</label>
                        <br></br>
                        <br></br>
                        <input name="billTotal" type="text" onChange={this.onTotalChange} />
                    </div>

                    <div className="service-rating">
                        <label htmlFor="service-rating"> How was your service?</label>
                        <br />
                        <br />
                        <select name="servicePerc" onChange={this.handleEventChange}>
                            <option value="">-- Select --</option>
                            <option value=".30">30% - Superb</option>
                            <option value=".25">25% - Great</option>
                            <option value=".10">10% - Okay</option>
                            <option value=".05">5% - Bad</option>
                            <option value="0">0% - Horrible</option>
                        </select>
                    </div>

                    <div className="party-total">
                        <label htmlFor="party-total">How many people are sharing the bill?</label>
                        <br/>
                        <br/>
                        <input name="totalCustomers" type="text" onChange={this.handleEventChange}/>
                    </div>

                    <div className="calculate">
                        <button className="calculate" onClick={this.tipCaluclate}>CALCULATE</button>
                    </div>

                    <div className="answer">Total Tip: {this.state.tip.toFixed(2)} EACH</div>
                </div>
            </div>
        )
    }
}
