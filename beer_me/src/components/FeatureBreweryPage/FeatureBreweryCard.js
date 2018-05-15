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

const FeatureBreweryCard = props => {
  let {
    id,
    brewery_name,
    address,
    city,
    state,
    zip,
    phone,
    url
  } = props.featureBrewery;
  console.log('PROPS.FEATUREBREWERY', props);
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
          <CardText>{brewery_name}</CardText>
          <CardLink href="#">Card Link</CardLink>
          <CardLink href="#">Another Link</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  featureBrewery: state.featureBrewery
});

export default connect(mapStateToProps)(FeatureBreweryCard);
