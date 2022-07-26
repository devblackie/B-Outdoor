import React from 'react';

export default function NavBar() {
    return (
        <div className="navbar">
            <a href="#" className="App-logo"><img src="src/Assets/Essesntials/Studio_Project.svg"></img></a>
            <div className="navbar-inner">
                <a href="#">Home</a>
                <a href="#">Book</a>
                <a href="#">Gallery</a>
            </div>
            <form className="search-bar-container">
                <input type="text" id="search-bar-input" placeholder="Search"></input>
            </form>
        </div>
    );
}