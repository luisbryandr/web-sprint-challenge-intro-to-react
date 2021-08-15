import React from 'react';
import styled from  'styled-components';
export default function Character(props){
    const {character} =props;

    const CharContainer = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 13%;
    margin:2%;
    &:hover{
        color:black;
        transform:scale(3);
        transition: all 0.5s ease-in-out;
    }
    `;

    return(
        <CharContainer>
        <div>
            {character.name}
        </div>
        <div>
            {character.birth_year}
        </div>

        </CharContainer>
    );
}