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
        console.log(ratesArray)
        const myArr = [];
        for (let i = 0; i < ratesArray.lenth; i++){
            let myObj = {x: ratesArray[i].date}
            myArr.push(myObj)
            console.log(myObj)
        } 
        this.setState({
            coordinates: myArr
        })
        console.log(myArr)
    }

    render(){
        const options = {
            title:{text: `${this.state.base} to ${this.props.match.params.code}`},
            exportEnabled: true,
            data: [{
                type: "line",
                dataPoints: [
                { x: 1, y: 450 },
                { x: 2, y: 414 },
                { x: 3, y: 520 },
                { x: 4, y: 460 },
                { x: 5, y: 450 },
                { x: 6, y: 500 },
                { x: 7, y: 480 },
                { x: 8, y: 480 },
                { x: 9, y: 410 },
                { x: 10, y: 500 },
                { x: 11, y: 480 },
                { x: 12, y: 510 }
              ]}]
          }
        return(
            <div>
                <h2>
                Historical Rates: {this.state.base} to {this.props.match.params.code}
                </h2>
                <ul>
                    {this.state.historicalRates.map((rate, index) => <li key={index}>{rate.date} rate: {Object.values(rate.rates)}</li>)}
                </ul>
                <CanvasJSChart options={options}/>
            </div>
        )
    }
}