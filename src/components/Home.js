import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';
import Gallery from './Gallery';
import Book from './Book';
import homePicture from './Assets/Essentials/pexels-marcin-dampc-1684187.jpg';
import { NavLink } from 'react-router-dom';



export default function Home() {

    
    return (
        <div className="home" style={{backgroundImage:`url(${homePicture})`,backgroundSize:"cover"}}>
            {/* <NavBar /> */}
            <div className="content">
                <h3>Fitness bonding Adventure</h3>
                <p>Achieve new fitness levels, bond, discover new places with us</p>
                <a className="btn"><NavLink className="nav-link" to='/gallery'>
             discover more
          </NavLink></a>
               
            
            </div>
            {/* <Book /> */}

            <Footer />
            
        </div>
   
    );

}