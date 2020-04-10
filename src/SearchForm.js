import React from 'react'

const SearchForm = (props) => {

    return(
        <div>
            <form>
                <label>Country of Origin</label>
                <select onChange={props.handleFormChange} name='startingCountry'>
                    {props.countries.map(country => <option key={country.id} value={country.currency_code}>{country.name}</option>)}
                </select>

                <label>Target Country</label>
                <select onChange={props.handleFormChange} name='endingCountry'>
                    {props.countries.map(country => <option key={country.id} value={country.currency_code}>{country.name}</option>)}
                </select>

            </form>
        </div>
    )
}

export default SearchForm