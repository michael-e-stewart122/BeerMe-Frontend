import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import BeerCards from './BeerCards/BeerCards';
import BeerJumbo from './BeerJumbo/BeerJumbo';

class BeerPage extends Component {
  render() {
    return (
      <Container>
        <Row lg="12">
          <Col lg="12">
            <BeerJumbo />
          </Col>
        </Row>
        <Row>
          <BeerCards history={this.props.history} />
        </Row>
      </Container>
    );
  }
}

export default BeerPage;
