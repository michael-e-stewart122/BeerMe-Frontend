import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Container, Row, Col, Button } from 'reactstrap';
import BeerCards from './BeerCards/BeerCards';
import BeerJumbo from './BeerJumbo/BeerJumbo';
import FilterBeers from './FilterBeers';

class BeerPage extends Component {
  render() {
    console.log('hellllloooooooo');
    console.log(this.state);
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
          <BeerCards
            userBeers={this.props.userBeers}
            history={this.props.history}
          />
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = ({ auth }) => ({
  userBeers: auth.userBeers
});

export default connect(mapStateToProps, null)(BeerPage);

// export default BeerPage;
