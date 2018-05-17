import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import FetchBreweryCard from './FetchBreweryCard';
import BreweryBeerCard from './BreweryBeerCard';

class FetchBreweryPage extends Component {
  render() {
    return (
      <Container>
        <Row lg="12">
          <Col lg="12">{}</Col>
        </Row>
        <Row>
          <FetchBreweryCard />
          <BreweryBeerCard />
        </Row>
      </Container>
    );
  }
}

export default FetchBreweryPage;
