import React from 'react';
// import Gallery from './Gallery';
import Home from './Home';
import NavBar from './NavBar';
import { Switch, Route } from "react-router-dom";
import Book from './Book';





const url = "http://localhost:3000/event"

function App() {
// const[display, setDisplayed] =useState("")

// useEffect(() => {
//   fetch(url) 
//     .then((r) => r.json())
//     .then((data) => setDisplayed(data)); 
// }, []);

// console.log(display)

  return (
    <div className="App">
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
     </Route>
     <Route exact path="/book">
        <Book />
     </Route>
    </Switch>
  </div>
  );
} 

export default App;
