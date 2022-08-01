import React,{useState, useEffect} from 'react';
import Home from './Home';
import NavBar from './NavBar';
import { Switch, Route } from "react-router-dom";
import Book from './Book';
import Gallery from './Gallery';
import AddEvent from './AddEvent';

function App() {

   const [events,setEvents] = useState([])
   const url = "https://blackapi.herokuapp.com/event";

   useEffect(() => {
      fetch(url) 
        .then((r) => r.json())
        .then((data) => setEvents(data)); 
    }, []);
  return (
    <div className="App">
    <NavBar />
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/book"><Book /></Route>
      <Route exact path="/gallery"><Gallery events={events}/></Route>
      <Route exact path="/addEvent"><AddEvent url={url} setEvents={setEvents} events={events}/></Route>
    </Switch>
  </div>
  );
} 

export default App;
