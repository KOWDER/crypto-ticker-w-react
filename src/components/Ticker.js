import React, { Component } from 'react';
import axios from "axios";

import Crypto from "./Crypto";
import InputForm from "./InputForm";

import '../styles/Ticker.css';

//styles for Currency.js
const style = {
    positive: {
        color: "green",
        fontWeight: 600
    },
    negative: {
        color: "red",
        fontWeight: 600
    }
}



class Ticker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            currencies: [],
            limit: 12,
        }
    }

    getCurrencies = () => {
        axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=${this.state.limit}`)
            .then(res => this.setState({
                currencies: res.data
            }));
        //console.log("new request");
    }


    handleLimit = (e) => {
        //console.log("input value not a number:", isNaN(e.target.value), "input empty?", e.target.value === "")
        if (e.target.value === "" || isNaN(e.target.value)) {
            this.setState({
                limit: 12
            }, () => this.getCurrencies())
        } else {
            this.setState({
                limit: e.target.value
            }, () => this.getCurrencies(this.state.limit))
        }
    }

    componentDidMount = () => {

        this.getCurrencies();
        this.tickerTimer = setInterval(() => {  
            this.getCurrencies();
        }, 10000)
    }

    checkNumber = (num) => {
        if (num > 0) {
            return <span style={style.positive}>+{num}%</span>
        } else {
            return <span style={style.negative}>{num}%</span>
        }
    };
    
    render() {
        const { currencies } = this.state;
        return (
        <div className="container">
            <InputForm onChange={this.handleLimit} title="Limit of cryptos to display" placeholder="12" />
            {currencies.map((currency) => {
                return (
                    <Crypto key={currency.id} currency={currency} checkNumber={this.checkNumber} />
                )
            })}
        </div>
        );
    }
}

export default Ticker;
