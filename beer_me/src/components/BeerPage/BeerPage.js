import React, { Component } from 'react';
// import Cards from './Cards/Cards';
// import Slideshow from './Carousel/Slideshow';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import BeerCards from './BeerCards/BeerCards';
// import BeerJumbo from './BeerJumbo/BeerCards';

class BeerPage extends Component {
  render() {
    return (
      <Container>
        <Row lg="12">
          <Col lg="12">{/* <BeerJumbo /> */}</Col>
        </Row>
        <Row>
          <BeerCards />
        </Row>
      </Container>
    );
  }
}

export default BeerPage;
