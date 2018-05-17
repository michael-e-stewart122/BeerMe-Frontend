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

const BreweryBeerCard = props => {
  let {
    beer_name,
    beer_label,
    style,
    abv,
    brewery_id,
    beer_id
  } = props.beersByBrewery;
  // console.log('props.beersByBrewery', props.beersByBrewery);

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
          <CardLink />
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  beersByBrewery: state.beersByBrewery
});

export default connect(mapStateToProps, null)(BreweryBeerCard);
