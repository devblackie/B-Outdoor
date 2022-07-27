import React from 'react';
import NavBar from './NavBar';

export default function Home() {
    return (
        <div className="home">
            <NavBar />
            <div className="content">
                <h3>Fitness bonding Adventure</h3>
                <p>Achieve new fitness levels, bond, discover new places with us</p>
                <a href="#" className="btn">discover more</a>
            
            </div>
            
        </div>
        
    );

}