import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeer } from '../../../redux/actions/fetchBeer';
// import './BeerCard.css';
import { Container, Card, Button, Image, Icon, Grid } from 'semantic-ui-react';

const BreweryBeerCard = props => {
  let { id, beer_name, beer_label, style, abv, ibu } = props.beer;
  console.log('history', props.history);

  const handleClick = e => {
    e.preventDefault();
    // console.log(style);
    // console.log('id.....', id);
    // console.log('props', props);
    props.fetchBeer(id, props.history);
  };
  console.log('props.beer', props.beer);

  return (
    <Card onClick={handleClick} className="beer-card">
      <Image top src={beer_label} alt="Card image cap" />
      <Card.Content>
        <Card.Header>{beer_name}</Card.Header>
        <Card.Description>{style}</Card.Description>
      </Card.Content>
    </Card>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchBeer }, dispatch);

export default connect(null, mapDispatchToProps)(BreweryBeerCard);
