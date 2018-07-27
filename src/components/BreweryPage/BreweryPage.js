import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import BreweryCards from './BreweryCards/BreweryCards'
import FilterBreweries from './FilterBreweries'

class BreweryPage extends Component {
  render() {
    return (
      <Container>
        <Row lg="12">
          <br />
          <Col lg="12">
            {' '}
            <FilterBreweries />
          </Col>
        </Row>
        <Row>
          <BreweryCards history={this.props.history} />
        </Row>
      </Container>
    )
  }
}

export default BreweryPage
