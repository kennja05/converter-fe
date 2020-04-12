import React from 'react'

export default class Charts extends React.Component {
    
    render(){
        console.log(this.props.match.params.code) //how we get the code of the currency that will be used to generate the graph
        return(
            <div>Chart Goes here</div>
        )
    }
}