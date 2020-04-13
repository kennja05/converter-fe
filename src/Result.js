import React from 'react'

const Result = (props) => {


    const {amount, from, to} = props.conversion.query


    return(
        <div>
            <h1>{amount} {from} is equal to {props.conversion.result.toFixed(2)} {to}</h1>


        </div>
    )

}

export default Result