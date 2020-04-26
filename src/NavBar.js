import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component{

    render(){
        return(
            <div className='container nav-bar'>
               <Link to='/convert'><span>Convert Currency</span></Link> <br></br>
               <Link to='/all_countries'><span>See All Available Countries</span></Link>
            </div>
        )
    }

}