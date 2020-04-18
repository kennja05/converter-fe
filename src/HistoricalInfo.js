import React from 'react'
import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default class HistoricalInfo extends React.Component {
    
    state = {
        base: 'USD',
        historicalRates: [],
        coordinates: []
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
            .then(pastRates => this.createCoordinates(pastRates))
    }

    createCoordinates = ratesArray => {
        const myArr = [];
        for (let i = 0; i < ratesArray.length; i++){
            const year = parseInt(ratesArray[i].date.split('-')[0])
            console.log(year)
            let myObj = {x: year, y: Object.values(ratesArray[i].rates)[0]}
            myArr.push(myObj)
        } 
        this.setState({
            coordinates: myArr
        })
    }

    render(){
        const options = {
            theme: 'dark2',
            title:{text: `${this.state.base} to ${this.props.match.params.code}`},
            axisY: {
                title: `${this.state.base} to ${this.props.match.params.code}`,
                includeZero: false,
                
            },
            axisX: {
                title: `On this day (${new Date().getMonth() + 1}/${new Date().getDate()}) by year`,
                includeZero: false,
                interval: 1
            },
            exportEnabled: true,
            data: [{
                type: "line",
                dataPoints: this.state.coordinates
            }]
        }
        console.log(this.state.coordinates)
        return(
            <div>
                <h2>
                Historical Rates: {this.state.base} to {this.props.match.params.code}
                </h2>
                <ul>
                    {this.state.historicalRates.map((rate, index) => <li key={index}>{rate.date} rate: {Object.values(rate.rates)}</li>)}
                </ul>
                <div className='chart-container'>
                    <CanvasJSChart options={options}/>
                </div>
            </div>
        )
    }
}