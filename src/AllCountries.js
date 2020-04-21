import React from 'react'

export default class AllCountries extends React.Component {

    state = {
        countries: [],
        startIndex: 0
    }

    componentDidMount(){
        fetch('http://localhost:3000/countries')
            .then(res => res.json())
            .then(places => this.setState({countries: places}))
    }

    handleNextClick = () => {
        if (this.state.startIndex + 50 < this.state.countries.length){
            this.setState({startIndex: this.state.startIndex + 50})
        }
    }

    handlePrevClick = () => {
        if (this.state.startIndex > 50){
            this.setState({startIndex: this.state.startIndex - 50})
        } else {
            this.setState({startIndex: 0})
        }
    }

    handleCodeClick = (e) => {
        this.props.history.push(`/historical_info/${e.target.id}`)
    }

    render(){
        return(
            <div className='all-countries container'>
                <ul className='list-group countries-list'>
                    {this.state.countries.slice(this.state.startIndex, this.state.startIndex + 50).map(country => <li className='list-group-item' key={country.id}><span>{country.name}</span> - <span>{country.currency_name} <span className='country-link' onClick={this.handleCodeClick} id={country.currency_code}>({country.currency_code})</span></span></li>)}
                </ul>
                <button onClick={this.handlePrevClick} style={{color: '#e98074'}}className='btn btn-light'>Previous</button>  <button onClick={this.handleNextClick} style={{color: '#e98074'}} className='btn btn-light'>Next</button>
            </div>
        )
    }


}