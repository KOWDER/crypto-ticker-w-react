import React from "react";

const style = {
    div: {
        width: "25%",
        backgroundColor: "beige",
        padding: "10px",
        margin: "10px"
    },
    title: {
        fontWeight: 800
    }
}


const Crypto = ({ currency, checkNumber }) => {

    return (
            <div style={style.div}>
                <p style={style.title}>{currency.name} ({currency.symbol})</p>
                <p>Price: ${Number(currency.price_usd).toFixed(2)}</p>
                <p>{checkNumber(Number(currency.percent_change_1h))} last hour</p>
                <p>{checkNumber(Number(currency.percent_change_24h))} last day</p>
                <p>{checkNumber(Number(currency.percent_change_7d))} last week</p>
            </div>
    )
}

export default Crypto;
