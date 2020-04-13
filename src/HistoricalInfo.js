import React from 'react'

export default class HistoricalInfo extends React.Component {
    
    state = {
        historicalExchangeRate: ''
    }

    componentDidMount(){
        const {base, target} = this.props
        const myDate = new Date()
        const queryEndDate = myDate.toISOString().split('T')[0] //todays date in yyyy-mm-dd format
        const queryStartDateArr = queryEndDate.split('-')
        queryStartDateArr[0] = parseInt(queryStartDateArr[0]) - 1 
        const queryStartDate = queryStartDateArr.join('-') //the date exactly a year ago
        fetch(`http://localhost:3000/countries/historical/rates/${base}/${target}/${queryStartDate}/`)
            .then(resp => resp.json())
            .then(historicalRate => this.setState({historicalExchangeRate: historicalRate.rates}))
    }

    render(){
        const {base} = this.props
        console.log(this.state.historicalExchangeRate[base])
        return(
            <h1>This same conversion if it were done 1 year ago</h1>
        )
    }
}