import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBrewery } from '../../../redux/actions/fetchBrewery';

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

          <Button onClick={handleClick}>Discover</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchBrewery }, dispatch);

export default connect(null, mapDispatchToProps)(BreweryCard);
