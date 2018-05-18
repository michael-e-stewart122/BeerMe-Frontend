import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBrewery } from '../../../redux/actions/fetchBrewery';
import { Container, Card, Button, Image, Icon, Grid } from 'semantic-ui-react';

// import { fetchBreweryBeer } from '../../../redux/actions/beersByBrewery';

const BreweryCard = props => {
  let {
    id,
    brewery_name,
    brewery_logo,
    address,
    city,
    state,
    zip,
    phone,
    url
  } = props.brewery;

  const handleClick = e => {
    e.preventDefault();
    props.fetchBrewery(id, props.history);
    // props.fetchBreweryBeer(id, props.history);
  };

  return (
    <Card onClick={handleClick}>
      <Image top src={brewery_logo} alt="Card image cap" />
      <Card.Content>
        <Card.Header>{brewery_name}</Card.Header>
        <Card.Meta>{city}</Card.Meta>
        <Card.Meta>{state}</Card.Meta>
      </Card.Content>
    </Card>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchBrewery }, dispatch);

export default connect(null, mapDispatchToProps)(BreweryCard);
