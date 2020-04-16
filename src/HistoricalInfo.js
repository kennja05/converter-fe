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
        console.log(formattedCurrentDate)
        fetch(`http://localhost:3000/countries/historical/rates/${base}/${target}/${formattedCurrentDate}/`)
            .then(resp => resp.json())
            .then(pastRates => this.setState({
                historicalRates: pastRates
            })
    }

    render(){
        return(
            <h2>
                This same conversion if it were done 1 year ago
            </h2>
        )
    }
}