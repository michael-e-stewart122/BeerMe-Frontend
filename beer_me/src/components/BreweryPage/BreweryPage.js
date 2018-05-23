import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import BreweryJumbo from './BreweryJumbo/BreweryJumbo';
import BreweryCards from './BreweryCards/BreweryCards';
import FilterBreweries from './FilterBreweries';

class BreweryPage extends Component {
  render() {
    return (
      <Container>
        <Row lg="12">
          <Col lg="12">
            <BreweryJumbo />
          </Col>
          <Col lg="12">
            <FilterBreweries />
          </Col>
        </Row>
        <Row>
          <BreweryCards history={this.props.history} />
        </Row>
      </Container>
    );
  }
}

export default BreweryPage;
