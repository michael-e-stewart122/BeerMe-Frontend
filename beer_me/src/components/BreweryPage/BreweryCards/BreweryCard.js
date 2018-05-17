import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBrewery } from '../../../redux/actions/fetchBrewery';
import { fetchBreweryBeer } from '../../../redux/actions/beersByBrewery';

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
    props.fetchBreweryBeer(id, props.history);
  };

  return (
    <Col sm="4">
      <Card>
        <CardImg top src={brewery_logo} alt="Card image cap" />
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
  bindActionCreators({ fetchBrewery, fetchBreweryBeer }, dispatch);

export default connect(null, mapDispatchToProps)(BreweryCard);
