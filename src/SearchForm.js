import React from 'react'

const SearchForm = (props) => {

    
    return(
        <div className='container'>
            <form onSubmit={props.handleFormSubmit}>
                
                <div className='form-group'>
                    <label className='control-label'><b>Country of Origin</b></label>
                    <select className='form-control' onChange={props.handleFormChange} name='startingCountry'>
                        {props.countries.length > 0 && props.countries.map(country => <option key={country.id} value={country.currency_code}>{country.name}</option>)}
                    </select>
                </div>

                <div className='form-group'>
                    <label className='control-label'><b>Target Country</b></label>
                    <select className='form-control' onChange={props.handleFormChange} name='endingCountry'>
                        {props.countries.length > 0 && props.countries.map(country => <option key={country.id} value={country.currency_code}>{country.name}</option>)}
                    </select>
                </div>

                <div className='form-group'>
                    <label className='control-label'><b>Amount</b></label>
                    <input className='form-control' onChange={props.handleFormChange} value={props.amt} type='number' name='amount' />
                </div>
            
                <div className='form-group'>
                    <input className='btn btn-primary' type='submit'/>
                </div>

            </form>
        </div>
    )
}

export default SearchForm