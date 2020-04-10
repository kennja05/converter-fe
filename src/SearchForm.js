import React from 'react'

const SearchForm = (props) => {

    return(
        <div>
            <form>
                <select>
                    {props.countries.map(country => <option key={country.id}>{country.name}</option>)}
                </select>
            </form>
        </div>
    )
}

export default SearchForm