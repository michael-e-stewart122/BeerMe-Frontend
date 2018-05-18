import React from 'react';
import { connect } from 'react-redux';
import BeerCard from './BeerCard';
import { Container, Card } from 'semantic-ui-react';
import './BeerCard.css';

const BeerCards = ({ beers, history }) => {

  let listOfBeers = beers.map(beer => (
    <BeerCard key={beer.id} history={history} beer={beer} />
  ));

  return (
    <Container className="beer-card">
      <Card.Group centered>{listOfBeers}</Card.Group>
    </Container>
  );
};

const mapStateToProps = ({ beers, filterBeers }) => {
  console.log(filterBeers);
  return filterBeers.type === 'beer_name'
    ? {
        beers: beers.filter(beer =>
          beer.beer_name.toLowerCase().includes(filterBeers.filterBeers)
        )
      }
    : {
        beers: beers.filter(beer =>
          beer.style.toLowerCase().includes(filterBeers.filterBeers)
        )
      };
};

export default connect(mapStateToProps, null)(BeerCards);
