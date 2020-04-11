import React from 'react'

const SearchForm = (props) => {

    
    return(
        <div>
            <form onSubmit={props.handleFormSubmit}>
                <label>Country of Origin</label>
                <select onChange={props.handleFormChange} name='startingCountry'>
                    {props.countries.length > 0 && props.countries.map(country => <option key={country.id} value={country.currency_code}>{country.name}</option>)}
                </select>

                <label>Target Country</label>
                <select onChange={props.handleFormChange} name='endingCountry'>
                    {props.countries.length > 0 && props.countries.map(country => <option key={country.id} value={country.currency_code}>{country.name}</option>)}
                </select>

                <label>Amount</label>
                <input onChange={props.handleFormChange} value={props.amt} type='number' name='amount' />
            
                <input type='submit'/>
            </form>
        </div>
    )
}

export default SearchForm