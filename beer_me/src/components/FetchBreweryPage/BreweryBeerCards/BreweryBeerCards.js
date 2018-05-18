import React from 'react';
import { connect } from 'react-redux';
import BreweryBeerCard from './BreweryBeerCard';
import { Card } from 'semantic-ui-react';

const BreweryBeerCards = props => {
  console.log('userbeer props', props);
  let listOfBeers = props.breweryBeers.map(beer => (
    <BreweryBeerCard history={props.history} key={beer.id} beer={beer} />
  ));
  return <Card.Group centered>{listOfBeers}</Card.Group>;
};

export default BreweryBeerCards;
