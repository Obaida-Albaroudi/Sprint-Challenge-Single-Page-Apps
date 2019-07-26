import React from 'react'
import {Card, Image} from 'semantic-ui-react';

export default function CharacterCard ({ name, gender, image, species, status, episodeCount }) {
  return (
    <Card key={name}>
      <Image src={image} wrapped ui={false}></Image>
      <div>
        <Card.Header>Name: {name}</Card.Header>
        <Card.Meta>Gender: {gender}</Card.Meta>
        <Card.Content>Species: {species}</Card.Content> 
        <Card.Content>Status: {status}</Card.Content>
        <Card.Content>Episode Count: {episodeCount}</Card.Content>
     </div>
    </Card> 
  )  
}
