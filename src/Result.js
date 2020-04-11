import React from 'react'

const Result = (props) => {

    console.log(props)

    const {amount, from, to} = props.conversion.query

    return(
        <div>
            <h1>{amount} {from} is equal to {props.conversion.result} {to}</h1>


        </div>
    )

}

export default Result