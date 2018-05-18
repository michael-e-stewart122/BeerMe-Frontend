import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import BreweryJumbo from './BreweryJumbo/BreweryJumbo';
import BreweryCards from './BreweryCards/BreweryCards';
import FilterBreweries from './FilterBreweries';

class BreweryPage extends Component {
  render() {
    // console.log('props!!!', this.props);
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
