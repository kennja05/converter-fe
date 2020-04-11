import React from 'react'
import { Link } from 'react-router-dom'

const Result = (props) => {

    console.log(props)

    const {amount, from, to} = props.conversion.query


    return(
        <div>
            <h1>{amount} <Link to={from}>{from}</Link> is equal to {props.conversion.result.toFixed(2)} <Link to={to}>{to}</Link></h1>


        </div>
    )

}

export default Result