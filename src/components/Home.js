import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Book from './Book';


export default function Home() {
    return (
        <div className="home">
            <NavBar />
            <div className="content">
                <h3>Fitness bonding Adventure</h3>
                <p>Achieve new fitness levels, bond, discover new places with us</p>
                <a href="#" className="btn">discover more</a>
            
            </div>
            <Book />
            
            {/* <Footer /> */}
            
        </div>
        
    );

}