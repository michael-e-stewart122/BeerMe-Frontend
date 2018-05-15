import React from 'react';
import { connect } from 'react-redux';
import BeerCard from './BeerCard';

import { Row } from 'reactstrap';

const BeerCards = ({ beers }) => {
  let listOfBeers = beers.map(beer => <BeerCard key={beer.id} beer={beer} />);
  return <Row>{listOfBeers}</Row>;
};

const mapStateToProps = ({ beers }) => ({
  beers: beers
});

export default connect(mapStateToProps, null)(BeerCards);
