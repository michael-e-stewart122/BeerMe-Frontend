import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle
} from 'reactstrap';

const FetchBeerCard = props => {
  let { id, beer_name, beer_label, style, abv, ibu } = props.fetchBeer;

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle />
          <CardSubtitle />
        </CardBody>
        <img width="100%" src={beer_label} alt="Card image cap" />
        <CardBody>
          <CardText>{beer_name}</CardText>
          <CardText>{style}</CardText>
          <CardText />
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  fetchBeer: state.fetchBeer
});

export default connect(mapStateToProps)(FetchBeerCard);
