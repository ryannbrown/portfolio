import React from 'react';
import './App.css';
import About from './components/about/About.js';
import Nav from './components/nav/Nav';
import CardList from './components/cardlist/CardList';

function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
      <CardList></CardList>
    </div>
  );
}

export default App;
