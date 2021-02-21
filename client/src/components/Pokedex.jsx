import React from 'react';
import Pokemon from './Pokemon.jsx';

const Pokedex = (props) => {
  return (
    <div>
      {props.pokemon.map((result, index) =>{
        return (
          <Pokemon key={index} pokemon={result} getPokemons={props.getPokemons}/>
        )
      })}
    </div>
  )
}


export default Pokedex