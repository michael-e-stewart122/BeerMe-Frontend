import React, { Component } from 'react';
import { connect } from 'react-redux';
import BreweryCard from './BreweryCard';
import { Card } from 'semantic-ui-react';

const BreweryCards = ({ breweries, history }) => {
  let listOfBreweries = breweries.map(brewery => (
    <BreweryCard key={brewery.id} history={history} brewery={brewery} />
  ));
  return <Card.Group centered>{listOfBreweries}</Card.Group>;
};

const mapStateToProps = ({ breweries }) => ({
  breweries: breweries
});

export default connect(mapStateToProps, null)(BreweryCards);
