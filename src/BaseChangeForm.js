import React from 'react'

class BaseChangeForm extends React.Component {
    
    state = {
        checked: 'EUR'
    }
    
    handleChangeBase = () => {
        
    }
    
    
    render(){
        return(
            <div className='radio-form'>
                
                <div class='form-check'>
                    <input class='form-check-input' type='radio' name='USD' value='USD' checked={this.state.checked === 'USD'}/>
                    <label class='form-check-label' for='USD'>U.S. Dollar</label>
                </div>

                <div class='form-check'>
                    <input class='form-check-input' type='radio' name='EUR' value='USD' checked={this.state.checked === 'EUR'}/>
                    <label class='form-check-label' for='EUR'>Euro</label>
                </div>





            </div>
        )
    }
}

export default BaseChangeForm