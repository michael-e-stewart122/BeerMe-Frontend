import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBrewery } from '../../../redux/actions/fetchBrewery';
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

const BreweryCard = props => {
  let {
    id,
    brewery_name,
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
  };

  return (
    <Card onClick={handleClick}>
      <Image
        top
        src="http://beerpulse.com/wp-content/uploads/2017/05/lagunitas-logo-2017.jpg"
        alt="Card image cap"
      />
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
