import React from 'react'
import SearchForm from './SearchForm'

export default class Main extends React.Component {

    state = {
        places: [],
        loaded: false
    }

    componentDidMount(){
        fetch('http://localhost:3000/countries')
            .then(resp => resp.json())
            .then(countries => this.setState({
                places: countries,
                loaded: true
            }))
    }

    render(){
        return(
            this.state.loaded ? 
            <div>
                <SearchForm countries={this.state.places}/>
            </div>
            :
            <div>not loaded yet</div>
        )
    }


}