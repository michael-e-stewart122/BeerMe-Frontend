import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Row,
  Col,
  Card,
  CardTitle,
  CardImg,
  CardBody,
  CardText,
  CardSubtitle,
  Button
} from 'reactstrap';

const handleClick = e => {
  e.preventDefault();
};

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
  // console.log('props.brewery!!!', props.brewery.id);
  return (
    <Col sm="4">
      <Card>
        <CardImg
          top
          src="http://beerpulse.com/wp-content/uploads/2017/05/lagunitas-logo-2017.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{brewery_name}</CardTitle>
          <CardSubtitle>{city}</CardSubtitle>
          <CardText>{state}</CardText>
          <Button onClick={this.props.handleClick}>Discover</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

const mapStateToProps = (state, props) => ({
  breweries: state.breweries
});

export default connect(mapStateToProps)(BreweryCard);
