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
  let { id, beer_name, style, abv, ibu } = props.fetchBeer;

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle />
          <CardSubtitle />
        </CardBody>
        <img
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
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
