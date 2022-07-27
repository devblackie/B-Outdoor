import React from 'react';    
import {logo} from '../Assets/data';

export default function NavBar() {
    return (
        <div className="navbar">
            <img className="App-logo" src={logo} alt="logo" />  
            <div className="navbar-inner">
                <a href="#">Home</a>
                <a href="#">Book</a>
                <a href="#">Gallery</a>
                <a hrref="#">About us</a>
            </div>
            <form className="search-bar-container">
                <input type="text" id="search-bar-input" placeholder="Search"></input>
            </form>
        </div>
    );
}