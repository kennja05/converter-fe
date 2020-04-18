import React from 'react'

export default class HistoricalInfo extends React.Component {
    
    state = {
        base: 'USD',
        historicalRates: []
    }

    componentDidMount(){
        this.getRates()
    }

    getRates = () => {
        const base = this.state.base
        const target = this.props.match.params.code
        const myDate = new Date();
        const formattedCurrentDate = myDate.toISOString().split('T')[0]
        fetch(`http://localhost:3000/countries/historical/rates/${base}/${target}/${formattedCurrentDate}/`)
            .then(resp => resp.json())
            .then(pastRates => this.setState({
                historicalRates: pastRates
            }))
        }

    render(){
        return(
            <div>
                <h2>
                Historical Rates 
                </h2>
                <ul>
                    {this.state.historicalRates.map((rate, index) => <li key={index}>{rate.date} rate: {Object.values(rate.rates)}</li>)}
                </ul>
            </div>
        )
    }
}