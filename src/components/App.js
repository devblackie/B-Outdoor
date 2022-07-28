import React from 'react';
import Home from './Home';
import NavBar from './NavBar';
import { Switch, Route } from "react-router-dom";
import Book from './Book';
import Gallery from './Gallery';





const url = "http://localhost:3000/event"

function App() {


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
     <Route exact path="/gallery">
        <Gallery />
     </Route>

    </Switch>
  </div>
  );
} 

export default App;
