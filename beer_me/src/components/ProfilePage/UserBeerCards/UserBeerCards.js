import React from 'react';
import { connect } from 'react-redux';
import UserBeerCard from './UserBeerCard';
import { Card } from 'semantic-ui-react';

const UserBeerCards = props => {
  console.log('userbeer props', props);
  let listOfBeers = props.userBeers.map(beer => (
    <UserBeerCard history={props.history} key={beer.id} beer={beer} />
  ));
  return <Card.Group centered>{listOfBeers}</Card.Group>;
};

export default UserBeerCards;
