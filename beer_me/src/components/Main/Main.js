import React, { Component } from 'react';
import Cards from '../Cards/Cards';
import SlideShow from '../Carousel/SlideShow';
import '../Carousel/Carousel.css';

import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';

class Main extends Component {
  render() {
    return (
      <Container>
        <Row lg="12">
          <Col minHeight="100%" lg="12">
            <SlideShow />
          </Col>
        </Row>
        <Row>
          <Cards />
        </Row>
      </Container>
    );
  }
}

export default Main;
