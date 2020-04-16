import React from 'react'

export default class HistoricalInfo extends React.Component {
    
    state = {
        base: 'USD',
        oldRates: []
    }

    componentDidMount(){
        this.getRates()
    }

    getHistoricalRates = () => {
        const base = this.state.base
        const target = this.props.match.params.code
        console.log(target)
        const historicalRateArray = [];
        const myDate = new Date();
        const formattedCurrentDate = myDate.toISOString().split('T')[0] //gets todays date in yyy-mm-dd format
        for (let i = 1; i < 6; i++) {
            const dateArr = formattedCurrentDate.split('-')
            dateArr[0] = parseInt(dateArr[0])- i
            const prevDate = dateArr.join('-')
            console.log(prevDate)
            fetch(`http://localhost:3000/countries/historical/rates/${base}/${target}/${prevDate}/`)
                .then(resp => resp.json())
                .then(rate => historicalRateArray.push(rate))
        }
        this.setState({
            oldRates: historicalRateArray
        })
    }

    getRates = () => {
        const base = this.state.base
        const target = this.props.match.params.code
        const myDate = new Date();
        const formattedCurrentDate = myDate.toISOString().split('T')[0]
        console.log(formattedCurrentDate)
        fetch(`http://localhost:3000/countries/historical/rates/${base}/${target}/${formattedCurrentDate}/`)
            .then(resp => resp.json())
            .then(info => console.log(info))
    }

    render(){
        console.log(this.state.oldRates)
        return(
            <h2>
                This same conversion if it were done 1 year ago
            </h2>
        )
    }
}