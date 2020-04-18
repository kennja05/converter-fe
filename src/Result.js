import React from 'react'
import { Link } from 'react-router-dom'

const Result = (props) => {


    const {amount, from, to} = props.conversion.query


    return(
        <div>
            <h1>{amount} <Link to={{pathname: `/historical_info/${from}`}}>{from}</Link> is equal to {props.conversion.result.toFixed(2)} <Link to={{pathname: `/historical_info/${to}`}}>{to}</Link></h1>
        </div>
    )

}

export default Result