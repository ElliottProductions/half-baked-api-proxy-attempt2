import React from 'react';

export default function PokemonList({ monsters }) {
  return (
    <div>
      {monsters.map(monster => 
        <div className="pokemans" key={monster._id}>
          <p>{monster.pokemon}</p>
          <p>hp: {monster.hp}</p>
          <p>shape: {monster.shape}</p>
          <img src={`${monster.url_image}`}/>
        </div>)}
    </div>
  );
}
