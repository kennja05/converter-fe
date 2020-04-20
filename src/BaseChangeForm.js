import React from 'react'

class BaseChangeForm extends React.Component {
    
    state = {
        checked: 'EUR',
        showSubmit: false
    }
    
    handleChangeBase = (e) => {
        console.log(e.target.name)
        this.setState({
            checked: e.target.name
        })
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.checked !== this.state.checked){
            this.setState({
                showSubmit: true
            })
        }
    }
    
    
    render(){
        return(
            <div className='radio-form'>
                
                <div className='form-check'>
                    <input onChange={this.handleChangeBase} className='form-check-input' type='radio' name='USD' value='USD' checked={this.state.checked === 'USD'}/>
                    <label className='form-check-label' htmlFor='USD'>U.S. Dollar</label>
                </div>

                <div className='form-check'>
                    <input onChange={this.handleChangeBase} className='form-check-input' type='radio' name='EUR' value='USD' checked={this.state.checked === 'EUR'}/>
                    <label className='form-check-label' htmlFor='EUR'>Euro</label>
                </div>

                <input type='submit' value='change base currency'/>



            </div>
        )
    }
}

export default BaseChangeForm