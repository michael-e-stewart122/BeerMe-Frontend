import React from 'react'
import UserBeerCard from './UserBeerCard'
import { Container, Card, Header } from 'semantic-ui-react'

const UserBeerCards = props => {
  console.log('userbeer props', props)

  let listOfBeers = props.userBeers.map(beer => (
    <UserBeerCard history={props.history} key={beer.id} beer={beer} />
  ))
  return (
    <Container style={{ marginBottom: '15em' }}>
      <Header as="h1" textAlign="center">
        Favorite Beers
      </Header>
      <Card.Group centered>{listOfBeers}</Card.Group>
    </Container>
  )
}

export default UserBeerCards
