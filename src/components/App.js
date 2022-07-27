import React, {useEffect, useState} from 'react';
import Gallery from './Gallery';
import Home from './Home';




const url = "http://localhost:3000/event"

function App() {
const[display, setDisplayed] =useState("")

useEffect(() => {
  fetch(url) 
    .then((r) => r.json())
    .then((data) => setDisplayed(data)); 
}, []);

console.log(display)

  return (
    <div>
      <Home />

{   display.map((data) =>    <Gallery display={data}/>)
}      
    </div>
  );
} 

export default App;
