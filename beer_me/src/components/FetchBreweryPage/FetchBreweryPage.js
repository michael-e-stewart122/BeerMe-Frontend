import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import FetchBreweryCard from './FetchBreweryCard';

class FetchBreweryPage extends Component {
  render() {
    return (
      <Container>
        <Row lg="12">
          <Col lg="12">{}</Col>
        </Row>
        <Row>
          <FetchBreweryCard />
        </Row>
      </Container>
    );
  }
}

export default FetchBreweryPage;
