import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import FetchBeerCard from './FetchBeerCard';

class FetchBeerPage extends Component {
  render() {
    return (
      <Container>
        <Row lg="12">
          <Col lg="12">{}</Col>
        </Row>
        <Row>
          <FetchBeerCard />
        </Row>
      </Container>
    );
  }
}

export default FetchBeerPage;
