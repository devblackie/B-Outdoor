import React from 'react';    
import logo from './Assets/Essentials/boutprofile.jpg';
import { NavLink } from 'react-router-dom'


export default function NavBar() {
    return (
        <div className="navbar">
            <img className="App-logo" src={`${logo}`}/>
            <div className="navbar-inner">
                <a href="#">
                <NavLink className="nav-link " to='/'>
             Home
      </NavLink>
                </a>
                <a href="#">
                <NavLink className="nav-link " to='/book'>
             Book
      </NavLink>
                </a>
                <a href="#">Gallery</a>
                <a hrref="#">About us</a>
            </div>
            <form className="search-bar-container">
                <input type="text" id="search-bar-input" placeholder="Search"></input>
            </form>
        </div>
    );
}