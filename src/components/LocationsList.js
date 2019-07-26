import React, { useEffect, useState } from 'react';
import axios from "axios";

import LocationCard from "./LocationCard.js"

export default function LocationsList() {
    const [Locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/location/")
        .then (info =>{
            setLocations(info.data.results)
        })
        .catch(error => {
            return "Locations"
        });
    }, []);

    //Over here I just return person as it represents each iteration of the array which is an object which is a person.
    return(
        <div >
            { Locations.map( info =>{
                return(
                    <LocationCard name={info.name} type={info.type} dimension={info.dimension} residents={info.residents.length} />
                )
            })

            }
        </div>
 
    )

}
