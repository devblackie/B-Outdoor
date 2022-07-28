import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Gallpad({image, location, amount}) {
  return (
    <div className="Gallpad">
        <img src={image} alt="Next one"/>
        <h3 className="Location">{location}</h3>
        <h3 className="Amount">{amount}</h3>
        <button className="btn-1"><NavLink className="nav-link" to='/book'>
             Select
          </NavLink></button>
    </div>
  )
}
