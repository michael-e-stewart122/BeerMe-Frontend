import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'reactstrap'
import BeerCards from './BeerCards/BeerCards'
import BeerJumbo from './BeerJumbo/BeerJumbo'
import FilterBeers from './FilterBeers'

class BeerPage extends Component {
  render() {
    return (
      <Container>
        <Row lg="12">
          <Col lg="12">
            <br />
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
    )
  }
}
const mapStateToProps = ({ auth }) => ({
  userBeers: auth.user.beers || ['none']
})

export default connect(mapStateToProps, null)(BeerPage)
