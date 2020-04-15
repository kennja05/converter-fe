import React from 'react'

export default class HistoricalInfo extends React.Component {
    
    state = {
        oldRates: []
    }

    componentDidMount(){
        this.getHistoricalRates()
    }

    getHistoricalRates = () => {
        const base = this.props.match.params
        const target = 'USD'
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
        return(
            <h2>
                This same conversion if it were done 1 year ago {amount} {base} would have been changeRate {target}.
            </h2>
        )
    }
}