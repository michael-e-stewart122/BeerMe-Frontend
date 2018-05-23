import React from 'react';
import { connect } from 'react-redux';
import UserBeerCard from './UserBeerCard';
import { Container, Card } from 'semantic-ui-react';

const UserBeerCards = props => {
  console.log('userbeer props', props);

  let listOfBeers = props.userBeers.map(beer => (
    <UserBeerCard history={props.history} key={beer.id} beer={beer} />
  ));
  return (
    <Container style={{ marginBottom: '10em' }}>
      <Card.Group centered>{listOfBeers}</Card.Group>;
    </Container>
  );
};

export default UserBeerCards;
