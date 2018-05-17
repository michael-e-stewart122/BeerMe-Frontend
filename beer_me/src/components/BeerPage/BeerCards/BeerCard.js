import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeer } from '../../../redux/actions/fetchBeer';
// import './BeerCard.css';

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

const BeerCard = props => {
  let { id, beer_name, beer_label, style, abv, ibu } = props.beer;
  // console.log('props', props);

  const handleClick = e => {
    e.preventDefault();
    // console.log('history', props.history);
    props.fetchBeer(id, props.history);
    // console.log('id.....', id);
  };

  return (
    <Col sm="4">
      <Card className="beer-card">
        <CardImg top src={beer_label} alt="Card image cap" />
        <CardBody>
          <CardTitle>{beer_name}</CardTitle>
          <CardSubtitle>{style}</CardSubtitle>

          {/* <CardText>located at blah blah blah</CardText> */}
          <Button onClick={handleClick}>Discover</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchBeer }, dispatch);

export default connect(null, mapDispatchToProps)(BeerCard);
