import React from 'react';
import { connect } from 'react-redux';
import './BeerCard.css';

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
  let { id, beer_name, style, abv, ibu } = props.beer;
  console.log('props', props);
  return (
    <Col sm="4">
      <Card className="beer-card">
        <CardImg
          top
          src="http://microbrewr.com/wp-content/uploads/2014/11/21st-amendment-logo.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{beer_name}</CardTitle>
          <CardSubtitle>{style}</CardSubtitle>
          <Button>Discover</Button>
        </CardBody>
      </Card>
    </Col>
  );
};

const mapStateToProps = (state, props) => ({
  beers: state.beers
});

export default connect(mapStateToProps)(BeerCard);
