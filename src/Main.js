import React from 'react'
import SearchForm from './SearchForm'

export default class Main extends React.Component {

    state = {
        places: [],
        loaded: false,
        startingCountry: '',
        endingCountry: ''
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

    render(){
        return(
            this.state.loaded ? 
            <div>
                <SearchForm handleFormChange={this.handleFormChange} countries={this.state.places}/>
            </div>
            :
            <div>not loaded yet</div>
        )
    }


}