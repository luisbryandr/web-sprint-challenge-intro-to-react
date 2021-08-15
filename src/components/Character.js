// Write your Character component here
import React from 'react'

export default function Character(props) {
    const {character} = props ;
    // need to process a function that goes over the data received from the api and returns me what i want to see on my page -- this case name and birth year
    return (
        <div>
            <div>{character.name}</div>
            <div>{character.birth_year}</div>
        </div>
    )
}