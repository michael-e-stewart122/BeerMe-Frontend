import React, { Component } from 'react';
import Cards from './Cards/Cards';
import Slideshow from './Slideshow/Slideshow';
import { Container, Row, Col } from 'reactstrap';

// import '../Carousel/Slideshow.css';

class Main extends Component {
  render() {
    console.log('this.state', this.state);
    return (
      <Container>
        <Row lg="12">
          <Col lg="12">
            <Slideshow />
          </Col>
        </Row>
        {`  `}
        <Row>
          <Cards />
        </Row>
        {`  `}
      </Container>
    );
  }
}

export default Main;
