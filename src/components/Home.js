import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Book from './Book';
import homePicture from './Assets/Essentials/pexels-marcin-dampc-1684187.jpg';


export default function Home() {
    return (
        <div className="home" style={{backgroundImage:`url(${homePicture})`,backgroundSize:"cover"}}>
            <NavBar />
            <div className="content">
                <h3>Fitness bonding Adventure</h3>
                <p>Achieve new fitness levels, bond, discover new places with us</p>
                <a href="#" className="btn">discover more</a>
               
            
            </div>
            <Book />

            <Footer />
            
        </div>
        
    );

}