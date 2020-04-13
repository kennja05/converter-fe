import React from 'react'

export default class HistoricalInfo extends React.Component {
    
    state = {
        historicalExchangeRate: ''
    }

    componentDidMount(){
        const myDate = new Date()
        const queryEndDate = myDate.toISOString().split('T')[0] //todays date in yyyy-mm-dd format
        const queryStartDateArr = queryEndDate.split('-')
        queryStartDateArr[0] = parseInt(queryStartDateArr[0]) - 1 
        const queryStartDate = queryStartDateArr.join('-') //the date exactly a year ago
        fetch(`http://localhost:3000/countries/historical/rates/${this.props.base}/${this.props.target}/${queryStartDate}/`)
            .then(resp => resp.json())
            .then(data => console.log(data))
    }

    render(){
        console.log(this.state) //how we get the code of the currency that will be used to generate the graph
        return(
            <div>Chart Goes here</div>
        )
    }
}