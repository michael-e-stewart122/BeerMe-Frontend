import React from 'react';
import { connect } from 'react-redux';
import BeerCard from './BeerCard';
import { Card } from 'semantic-ui-react';

const BeerCards = ({ beers, history }) => {
  // console.log('history...', history);
  let listOfBeers = beers.map(beer => (
    <BeerCard key={beer.id} history={history} beer={beer} />
  ));
  return <Card.Group centered>{listOfBeers}</Card.Group>;
};

const mapStateToProps = ({ beers }) => ({
  beers: beers
});

export default connect(mapStateToProps, null)(BeerCards);
