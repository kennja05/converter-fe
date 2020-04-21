import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component{

    render(){
        return(
            <div className='container nav-bar'>
               <Link to='/convert'><span>Convert Currency</span></Link> <br></br>
               <span>See All Available Currencies</span>
            </div>
        )
    }

}