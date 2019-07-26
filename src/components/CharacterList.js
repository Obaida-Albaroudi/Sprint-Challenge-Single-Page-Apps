import React, { useEffect, useState } from 'react';
import axios from "axios";
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  const [Characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character/")
    .then (info =>{
        setCharacters(info.data.results)
    })
    .catch(error => {
        return "Characters"
    });
}, []);

  return(
    <section className='character-list grid-view'> 
    {Characters.map( info =>{
      return(
      <CharacterCard name={info.name} gender={info.gender} image={info.image} species={info.species} status={info.status} episodeCount={info.episode.length}/>)
    })
    }
    </section>
  )

    

}
