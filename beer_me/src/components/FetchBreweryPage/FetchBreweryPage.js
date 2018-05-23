import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import FetchBreweryJumbo from './FetchBreweryJumbo/FetchBreweryJumbo';

import BreweryBeerCards from './BreweryBeerCards/BreweryBeerCards';

class FetchBreweryPage extends Component {
  render() {
    let { breweryBeers } = this.props.history.location.state;
    console.log('pleassse', breweryBeers);
    return (
      <Container>
        <Row lg="12">
          <Col lg="12">
            <FetchBreweryJumbo breweryBeers={breweryBeers} />
          </Col>
        </Row>
        <Row>
          <Col lg="12">
            <BreweryBeerCards
              history={this.props.history}
              breweryBeers={breweryBeers}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

// const mapStateToProps = state => {
//   console.log(state);
// };
export default FetchBreweryPage;
