import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeer } from '../../../redux/actions/fetchBeer';
// import './BeerCard.css';
import { Container, Card, Button, Image, Icon, Grid } from 'semantic-ui-react';
// import {
//   Row,
//   Col,
//   Card,
//   CardTitle,
//   CardImg,
//   CardBody,
//   CardText,
//   CardSubtitle,
//   Button
// } from 'reactstrap';

const UserBeerCard = props => {
  let { id, beer_name, style, abv, ibu } = props.beer;

  const handleClick = e => {
    e.preventDefault();
    console.log(style);
    console.log('id.....', id);
    console.log('history', props.history);
    console.log('props', props);
    props.fetchBeer(id, props.history);
  };

  return (
    <Card onClick={handleClick} className="beer-card">
      <Image
        top
        src="http://microbrewr.com/wp-content/uploads/2014/11/21st-amendment-logo.jpg"
        alt="Card image cap"
      />
      <Card.Content>
        <Card.Header>{beer_name}</Card.Header>
        <Card.Description>{style}</Card.Description>
      </Card.Content>
    </Card>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchBeer }, dispatch);

export default connect(null, mapDispatchToProps)(UserBeerCard);
