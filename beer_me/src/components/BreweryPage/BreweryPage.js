import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import BreweryCards from './BreweryCards/BreweryCards';

class BreweryPage extends Component {
  render() {
    return (
      <Container>
        <Row lg="12">
          <Col lg="12">{}</Col>
        </Row>
        <Row>
          <BreweryCards />
        </Row>
      </Container>
    );
  }
}

export default BreweryPage;
