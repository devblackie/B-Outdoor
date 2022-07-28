import React from 'react';    
import logo from './Assets/Essentials/boutprofile.jpg';


export default function NavBar() {
    return (
        <div className="navbar">
            <div style={{backgroundImage:`url(${logo})`}}><img /></div> 
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