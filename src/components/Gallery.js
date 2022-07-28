import React,{useState, useEffect}from 'react';
import { NavLink } from 'react-router-dom';
import Gallpad from './Gallpad';
import homePicture from './Assets/Essentials/pexels-capture-blinks-285598.jpg';

export default function Gallery() {

    const[display, setDisplayed] =useState([])

useEffect(() => {
  fetch("https://blackapi.herokuapp.com/event") 
    .then((r) => r.json())
    .then((data) => setDisplayed(data)); 
}, []);

const picture = display.map((pic)=> {
    return (
        <Gallpad 
        image= {pic.image}
        location ={pic.location}
        amount ={pic.amount}
        />
    );
}) 

console.log(display)
    return (
        <div className="gallery" style={{backgroundImage:`url(${homePicture})`,backgroundSize:"cover"}}>
            <h1 className="heading">
               
                <span>g</span>
                <span>a</span>
                <span>l</span>
                <span>l</span>
                <span>e</span>
                <span>r</span>
                <span>y</span>
            </h1>
            {picture}
            
            
        </div>
    );
}