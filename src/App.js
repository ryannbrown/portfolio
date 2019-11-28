import React from 'react';
import './App.css';
import About from './components/about/About.js';
import Nav from './components/nav/Nav';
import CardList from './components/cardlist/CardList';
import Contact from './components/contact/Contact.js';

function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      <CardList id="portfolio"></CardList>
      <Contact/>
    </div>
  );
}

export default App;
