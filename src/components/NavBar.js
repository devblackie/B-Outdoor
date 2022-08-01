import React from 'react';    
import { NavLink } from 'react-router-dom';


export default function NavBar() {

    const logo = 'https://images.unsplash.com/photo-1596021688656-35fdc9ed0274?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVhbWJ1aWxkaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
    return (
        <div className="navbar">
            <img className="App-logo" src={`${logo}`}/>
            <div className="navbar-inner">
                <a href="#">
                <NavLink className="nav-link " to='/'>Home</NavLink>
                </a>
                <a href="#">
                <NavLink className="nav-link " to='/gallery'>Gallery</NavLink>
                <NavLink className="nav-link " to='/addEvent'>Add Event</NavLink>
                </a>
            
            </div>
           
        </div>
    );
}