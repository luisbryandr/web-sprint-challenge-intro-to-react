import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
const [characters,setCharacters] = useState([])//setting the state initially to an empty array that will be filled with the effect of fetching the characters from the API
const [error, setError] =  useState(null);


useEffect(()=>{
  axios.get('https://swapi.dev/api/people')
  .then(res => {
    setCharacters(res.data)
  })
  .catch(err =>{
    console.log(err);
    return 'error Chewie & Solo is working on fixing it'
  })
})
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      {error && <h1>{error}</h1>}
      <h1 className="Header">Star Wars Characters</h1>
      
    </div>
  );
}

export default App;
