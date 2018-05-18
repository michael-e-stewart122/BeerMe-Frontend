import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeer } from '../../../redux/actions/fetchBeer';
import { Container, Card, Button, Image, Icon, Grid } from 'semantic-ui-react';
import './BeerCard.css';

const BeerCard = props => {
  let { id, beer_name, beer_label, style, abv, ibu } = props.beer;
  const handleClick = e => {
    e.preventDefault();
    props.fetchBeer(id, props.history);
  };

  return (
    <Card className="beer-card" onClick={handleClick}>
      <Image src={beer_label} />
      <Card.Content>
        <Card.Header>{beer_name}</Card.Header>
        <Card.Description>{style}</Card.Description>

        <Card.Meta />
      </Card.Content>
    </Card>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchBeer }, dispatch);

export default connect(null, mapDispatchToProps)(BeerCard);
