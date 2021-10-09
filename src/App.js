import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character'
import Details from './components/Details'

function App() {
  const [characterList, setCharacter] = useState([]);
  const [currentCharacter, setCC] =useState('false');

  const expand = id => {
    setCC(id);
  }

  const close = id => {
    setCC(null);
  }

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      console.log(res.data)
      setCharacter(res.data)
    })
    .catch(err => console.log(err));
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  return (
    <div>
      <h1 className="Header">Characters</h1>
      {
        characterList.map (chr => {
          return <Character key = {chr.name} props = {chr} action ={expand} />
        })
      }
      {
        //currentCharacter && <Details props = {characterList} id={currentCharacter} />
      }
    </div>
  );
}

export default App;
