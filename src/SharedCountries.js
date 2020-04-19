import React from 'react'

export default class SharedCountries extends React.Component {

    state = {
        countries: [],
        loaded: false
    }

    componentDidMount(){
        fetch(`http://localhost:3000/countries/codes/${this.props.code}`)
            .then(res => res.json())
            .then(countryList => this.setState({countries: countryList, loaded: true}))
    }


    render(){
        console.log(this.state.countries)
        return(
            <div>
                <h2 className='jumbotron'>Countries that use the <u>{this.state.loaded && this.state.countries[0].currency_name}</u></h2>
                <ul>
                    {this.state.loaded && this.state.countries.map(country => <li key={country.id}>{country.name}</li>)}
                </ul>
            </div>
        )
    }
        




}