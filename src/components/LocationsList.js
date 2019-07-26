import React, { useEffect, useState } from 'react';

export default function LocationsList({Locations}) {
    const location = data.map((information) =>
    <Card key={information}>
        <h1>{information.name}</h1>   
        <div>
            <Content>Type: {information.type}</Content>
            <Content>Dimenstions: {information.dimensions}</Content>
        </div>
    </Card> 
    )
    //Over here I just return person as it represents each iteration of the array which is an object which is a person.
    return(
        <div >
            {location}
        </div>
 
    )

}
