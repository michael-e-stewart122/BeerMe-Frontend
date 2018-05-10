import React, { Component } from 'react';
import Cards from '../Cards/Cards';

import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';

class Main extends Component {
  render() {
    return (
      <Container>
        {/* <Row> */}
        {/* <Carousel /> */}
        {/* </Row> */}
        <Row>
          <Cards />
        </Row>
      </Container>
    );
  }
}

export default Main;
