import React from 'react'
import {Card} from 'semantic-ui-react';

export default function LocationCard ({ name, type, dimension, residents }) {
  // image={image}
  return (
    <Card key={name}>
    <div>
      <Card.Header>Name: {name}</Card.Header>
      <Card.Meta>Residents: {residents}</Card.Meta>
      <Card.Content>Type: {type}</Card.Content> 
      <Card.Content>Dimension: {dimension}</Card.Content>
   </div>
  </Card> 
  )
}
