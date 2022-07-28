import React from 'react'

export default function Gallpad() {
  return (
    <div className="Gallpad">
        <img/>
        <h3 className="Location"></h3>
        <h3 className="Amount"></h3>
        <button className="btn-1"><NavLink className="nav-link" to='/book'>
             Select
          </NavLink></button>
    </div>
  )
}
