import React from 'react';
import { connect } from 'react-redux';
import BreweryBeerCard from './BreweryBeerCard';
import { Card, Container } from 'semantic-ui-react';
import './BreweryBeerCard.css';

const BreweryBeerCards = props => {
  console.log('userbeer props', props);
  let listOfBeers = props.breweryBeers.map(beer => (
    <BreweryBeerCard
      className="beer-card"
      history={props.history}
      key={beer.id}
      beer={beer}
    />
  ));
  return (
    <Container className="beer-card">
      <Card.Group centered>{listOfBeers}</Card.Group>
    </Container>
  );
};

export default BreweryBeerCards;
