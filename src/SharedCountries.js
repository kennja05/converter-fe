import React from 'react'

export default class SharedCountries extends React.Component {

    state = {
        countries: [],
        loaded: false,
        startIndex: 0
    }

    componentDidMount(){
        fetch(`http://localhost:3000/countries/codes/${this.props.code}`)
            .then(res => res.json())
            .then(countryList => this.setState({countries: countryList, loaded: true}))
    }

    handleNextClick = () => {
        if (this.state.startIndex + 5 < this.state.countries.length) {
            this.setState({
                startIndex: this.state.startIndex + 5
            })
        }
    }

    handlePrevClick = () => {
        if (this.state.startIndex > 5) {
            this.setState({
                startIndex: this.state.startIndex - 5
            })
        } else {
            this.setState({
                startIndex: 0
            })
        }
    }


    render(){
        return(
            <div>
                <h2 style={{color: '#8e8d8a'}}className='title'>Countries that use the {this.state.loaded && this.state.countries[0].currency_name} ({this.props.code})</h2>
                <ul className='list-group shared-countries'>
                    {this.state.loaded && this.state.countries.slice(this.state.startIndex, this.state.startIndex + 5).map(country => <li className='list-group-item' key={country.id}>{country.name}</li>)}
                    {this.state.countries.length > 5 && <li><button onClick={this.handlePrevClick} style={{backgroundColor: '#d8c3a5'}}>previous</button> <button onClick={this.handleNextClick} style={{backgroundColor: '#d8c3a5'}}>next</button></li>}
                </ul>
            </div>
        )
    }
        




}