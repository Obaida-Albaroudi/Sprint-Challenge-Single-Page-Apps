import React, { useEffect, useState } from 'react';
import axios from "axios";
import EpsiodeCard from './EpisodeCard.js';

export default function EpisodeList() {
    const [Epsiodes, setEpisodes] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode/")
        .then (info =>{
            setEpisodes(info.data.results)
        })
        .catch(error => {
            return "Epsiodes"
        });
    }, []);

  return(
  <section className='character-list grid-view'>
    {Epsiodes.map( info =>{
        console.log(info)
         return(
    <EpsiodeCard name={info.name} airDate={info.aire_date} episode={info.episode}/>)
    })
    }
  
  </section>
  )

}