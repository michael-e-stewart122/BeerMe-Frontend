import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import BeerCards from './BeerCards/BeerCards';
import BeerJumbo from './BeerJumbo/BeerJumbo';
import FilterBeers from './FilterBeers';
class BeerPage extends Component {
  render() {
    return (
      <Container>
        <Row lg="12">
          <Col lg="12">
            <BeerJumbo />
          </Col>
          <Col lg="12">
            <FilterBeers />
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
