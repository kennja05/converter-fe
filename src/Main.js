import React from 'react'
import SearchForm from './SearchForm'
import Result from './Result'

export default class Main extends React.Component {

    

    state = {
        places: [],
        loaded: false,
        startingCountry: '',
        endingCountry: '',
        amount: '',
        searched: false
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
            [e.target.name]: e.target.value
        })
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        const {startingCountry, endingCountry, amount} = this.state
        fetch(`http://localhost:3000/countries/convert/${startingCountry}/${endingCountry}/${amount}`)
            .then(res => res.json())
            .then(info => console.log(info))
    }

    render(){
        console.log(this.state.amount)
        return(
            this.state.loaded ? 
            <div>
                <SearchForm amt={this.state.amount} handleFormSubmit={this.handleFormSubmit} handleFormChange={this.handleFormChange} countries={this.state.places}/>
                <Result />
            </div>
            :
            <div>not loaded yet</div>
        )
    }


}