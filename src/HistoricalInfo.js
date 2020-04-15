import React from 'react'

export default class HistoricalInfo extends React.Component {
    
    state = {
        historicalExchangeRate: '',
        oldRates: []
    }

    componentDidMount(){
        this.getHistoricalRates()
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

    getHistoricalRates = () => {
        const {base, target} = this.props;
        const historicalRateArray = [];
        const myDate = new Date();
        const formattedCurrentDate = myDate.toISOString().split('T')[0] //gets todays date in yyy-mm-dd format
        for (let i = 1; i < 6; i++) {
            const dateArr = formattedCurrentDate.split('-')
            dateArr[0] = parseInt(dateArr[0])- i
            const prevDate = dateArr.join('-')
            fetch(`http://localhost:3000/countries/historical/rates/${base}/${target}/${prevDate}/`)
                .then(resp => resp.json())
                .then(rate => historicalRateArray.push(rate))
        }
        this.setState({
            oldRates: historicalRateArray
        })
    }

    render(){
        const {base, amount, target} = this.props
        console.log(this.state.oldRates)
        return(
            <h2>
                This same conversion if it were done 1 year ago {amount} {base} would have been   {Object.values(this.state.historicalExchangeRate)[0] * amount} {target}.
            </h2>
        )
    }
}