import React, { Component } from 'react';
// import { Grid, Image, Container } from 'semantic-ui-react';

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

const Cards = () => (
  <Row>
    <Col sm="4">
      <Card>
        <CardImg
          top
          width="10%"
          src="http://microbrewr.com/wp-content/uploads/2014/11/21st-amendment-logo.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Brewery Of the Week</CardTitle>
          <CardSubtitle>21st Amendment</CardSubtitle>
          <CardText>located at blah blah blah</CardText>
          <Button>Check It Out!</Button>
        </CardBody>
      </Card>
    </Col>
    <Col sm="4">
      <Card>
        <CardImg
          top
          width="10%"
          src="http://microbrewr.com/wp-content/uploads/2014/11/21st-amendment-logo.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Brewery Of the Week</CardTitle>
          <CardSubtitle>21st Amendment</CardSubtitle>
          <CardText>located at blah blah blah</CardText>
          <Button>Check It Out!</Button>
        </CardBody>
      </Card>
    </Col>
    <Col sm="4">
      <Card>
        <CardImg
          top
          width="10%"
          src="http://microbrewr.com/wp-content/uploads/2014/11/21st-amendment-logo.jpg"
          alt="Card image cap"
        />
        <CardBody>
          <CardTitle>Brewery Of the Week</CardTitle>
          <CardSubtitle>21st Amendment</CardSubtitle>
          <CardText>located at blah blah blah</CardText>
          <Button>Check It Out!</Button>
        </CardBody>
      </Card>
    </Col>
  </Row>
);

export default Cards;
