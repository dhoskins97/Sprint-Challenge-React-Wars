import React, { useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Component from '../src/components/Component.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [peopleObject, setPeopleObject] = useState([]);

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect( () => {
    axios.get(`https://swapi.co/api/people/?format=json`).then( (res) => {
      setPeopleObject(res.data.results)
    } )
  }, [] )
  console.log(peopleObject)

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {peopleObject.map( peopleItem => <Component name={peopleItem.name} gender={peopleItem.gender} weight={peopleItem.mass} />)}
    </div>
  );
}

export default App;
