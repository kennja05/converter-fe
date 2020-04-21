import React from 'react'

export default class AllCountries extends React.Component {

    state = {
        countries: []
    }

    componentDidMount(){
        fetch('http://localhost:3000/countries')
            .then(res => res.json())
            .then(places => this.setState({countries: places}))
    }

    render(){
        return(
            <div className='all-countries container'>
                <ul className='list-group'>
                    {this.state.countries.map(country => <li className='list-group-item' key={country.id}><span>{country.name}</span><span>{country.currency_name}</span></li>)}
                </ul>
            </div>
        )
    }


}