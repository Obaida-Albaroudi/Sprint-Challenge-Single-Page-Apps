import React from 'react'
import {Card} from 'semantic-ui-react';

export default function EpsiodeCard ({ name, airDate, episode}) {
    return (
      <Card key={name}>
      <div>
        <Card.Header>Name: {name}</Card.Header>
        <Card.Meta>Aird Date: {airDate}</Card.Meta>
        <Card.Content>Episode: {episode}</Card.Content> 
     </div>
    </Card> 
  )  
  }