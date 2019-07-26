import React, {useState, useEffect} from "react";
import axios from "axios";


function Data(){
    const [Characters, setCharacters] = useState([]);
    const [Locations, setLocations] = useState([]);
    const [Epsiodes, setEpisodes] = useState([]);

    //use Effect is allowing us to locate the api. Once we find our api we index into the array where the dataset we want to work with is located.
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/")
        .then (info =>{
            setCharacters(info.data.results)
        })
        .catch(error => {
            return "Characters"
        });
    }, []);
    console.log(Characters)

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location/")
        .then (info =>{
            setLocations(info.data.results)
        })
        .catch(error => {
            return "Locations"
        });
    }, []);
    console.log(Locations)

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/episode/")
        .then (info =>{
            setEpisodes(info.data.results)
        })
        .catch(error => {
            return "Epsiodes"
        });
    }, []);
    console.log(Epsiodes)

    return (
        <div>
            <LocationList Locations={Locations} />
         
        </div>
    )
};

export default Data;