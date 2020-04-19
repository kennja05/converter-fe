import React from 'react'
import SearchForm from './SearchForm'
import Result from './Result'
import ReactLoading from 'react-loading'

export default class Main extends React.Component {

    

    state = {
        places: [],
        loaded: false,
        startingCountry: 'AFN', //essentially giving the select form a default value if user submits form without changing anything
        endingCountry: 'AFN',
        amount: '1',
        searched: false,
        conversionInfo: [],

    }

    componentDidMount(){
        fetch('http://localhost:3000/countries')
            .then(resp => resp.json())
            .then(countries => this.setState({
                places: countries,
                loaded: true
            }))
    }

    handleFormChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            searched: false
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        if (this.state.amount > 0) {
            const {startingCountry, endingCountry, amount} = this.state
            fetch(`http://localhost:3000/countries/convert/${startingCountry}/${endingCountry}/${amount}`)
                .then(res => res.json())
                .then(conversion => this.setState({
                    searched: true,
                    conversionInfo: conversion
                }))
        } else {
            alert("Please input an amount greater than 0")
        }
    }
    
    render(){
        return(
            this.state.loaded ? 
            <div>
                <SearchForm amt={this.state.amount} handleFormSubmit={this.handleFormSubmit} handleFormChange={this.handleFormChange} countries={this.state.places}/>
                {this.state.searched && <Result conversion={this.state.conversionInfo} />}
            </div>
            :
            <div>
                <ReactLoading type={'bars'} color={'#6b6e70'} />
            </div>
        )
    }


}