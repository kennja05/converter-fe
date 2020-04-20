import React from 'react'
import SharedCountries from './SharedCountries'
import CanvasJSReact from './canvasjs.react';
import BaseChangeForm from './BaseChangeForm'
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


export default class HistoricalInfo extends React.Component {
    
    state = {
        base: 'USD',
        historicalRates: [],
        coordinates: [],
        validCode: true
    }

    // componentDidMount(){
    //     this.getRates()
    // }

    // componentDidUpdate(prevProps, prevState){
    //     if (prevState.base !== this.state.base) {
    //         this.getRates()
    //     }
    // }

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
         if (ratesArray[0].success === true) {
            const myArr = [];
            for (let i = 0; i < ratesArray.length; i++){
                const year = parseInt(ratesArray[i].date.split('-')[0])
                let myObj = {x: year, y: Object.values(ratesArray[i].rates)[0], lineColor: '#E98074', markerColor: '#8E8D8A'}
                myArr.push(myObj)
            } 
            this.setState({
                coordinates: myArr
            })
        } else {
            this.setState({validCode: false})
        }
    }

    displayZero = () => {
        if (this.state.coordinates.length > 0 && this.state.coordinates[0].y < 10) {
            return true
        } else {
            return false
        }
    }

    interval= () => {
        if (this.state.coordinates.length > 0){
            const myArr = this.state.coordinates.map(coord => coord.y).sort()
            const maxRange = myArr[myArr.length -1] - myArr[0]
            if (maxRange < 1) {
                return 0.1
            } else if (maxRange < 5) {
                return 0.25
            } else if (maxRange < 20) {
                return 0.5
            } else if (maxRange < 50) {
                return 4
            } else {
                return 10
            }
        }
    }

    changeBase = (e, code) => {
        e.preventDefault()
        if (this.state.base !== code){
            this.setState({
                base: code
            })
        }
    }

    render(){
        const options = {
            theme: 'light2',
            height: 250,
            lineColor: '#E98074',
            title:{text: `On this day (${new Date().getMonth() + 1}/${new Date().getDate()}) by year`,fontColor: "#E98074"},
            axisY: {
                title: `1 ${this.state.base} to ${this.props.match.params.code.toUpperCase()}`,
                includeZero: false,
                interval: this.interval()
            },
            axisX: {
                title: `YEAR`,
                interval: 1,
                valueFormatString:'#'
            },
            exportEnabled: true,
            data: [{
                type: "line",
                xValueFormatString: '#',
                dataPoints: this.state.coordinates
            }]
        }
        return(
            <div className='container historical-info'>
                <div className='chart-holder'>
                    <CanvasJSChart options={options}/>
                </div>
                <BaseChangeForm changeBase={this.changeBase}/>
                <SharedCountries code={this.props.match.params.code} valid={this.state.validCode}/>
            </div>
        )
    }
}