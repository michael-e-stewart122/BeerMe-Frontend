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

const Cards = ({ beers, breweries }) => (
  <Row>
    <Col sm="4">
      <Card>
        <CardImg
          top
          src="http://microbrewr.com/wp-content/uploads/2014/11/21st-amendment-logo.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Find a Beer!</CardTitle>
          {/* <CardSubtitle>21st Amendment</CardSubtitle> */}
          {/* <CardText>located at blah blah blah</CardText> */}
          <Button href="/beers">Discover</Button>
        </CardBody>
      </Card>
    </Col>
    <Col sm="4">
      <Card>
        <CardImg
          top
          src="http://microbrewr.com/wp-content/uploads/2014/11/21st-amendment-logo.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Find a Brewery!</CardTitle>
          {/* <CardSubtitle>21st Amendment</CardSubtitle> */}
          {/* <CardText>located at blah blah blah</CardText> */}
          <Button href="/breweries">Discover</Button>
        </CardBody>
      </Card>
    </Col>
    <Col sm="4">
      <Card>
        <CardImg
          top
          src="http://microbrewr.com/wp-content/uploads/2014/11/21st-amendment-logo.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>{console.log(beers[0])}</CardTitle>

          {/* <CardSubtitle>21st Amendment</CardSubtitle> */}
          {/* <CardText>located at address</CardText> */}
          <Button href="/breweries">Check It Out!</Button>
        </CardBody>
      </Card>
    </Col>
  </Row>
);

const mapStateToProps = ({ beers, breweries }) => ({
  beers: beers,
  breweries: breweries
});

export default connect(mapStateToProps, null)(Cards);
