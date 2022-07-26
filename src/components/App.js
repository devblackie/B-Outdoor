import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Home from './Home';
import AboutUs from './AboutUs';
import Books from './Book';
import Gallery from './Gallery';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <NavBar/>
      <Home />
    </div>
  );
}

export default App;
