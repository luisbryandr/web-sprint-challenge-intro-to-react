import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Character from './components/Character';
import styled from 'styled-components';

const App = () => {
  const [characters, setCharacters] =useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(()=> {
    const fetchChracterData = () => {
      axios.get('https://swapi.dev/api/people')
      .then(res => {
        setCharacters(res.data);
       
      })
      .catch(err => {
        debugger
      });
    }
    fetchChracterData();
  }, []);

  console.log(`HERE IS THE RESPONSE`, characters);

  const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;`

  const Header = styled.h1`
   color:white;
   &:hover{
        color:black;
        transform:scale(3);
        transition: all 0.5s ease-in-out;
   }`

   const CharacterDetails = styled.section`
   color: white;
   margin: 1%auto;
   `;

  return (
    <Container>
      <Header>STAR WARS</Header>
      <div className="App">
       <h1 className="Header">Characters</h1>
       <CharacterDetails>
        {characters.map((character, key) => (<Character character={character} key={key}/>))}
      </CharacterDetails>
      
      </div>
    </Container>
    
    
  );
}

export default App;