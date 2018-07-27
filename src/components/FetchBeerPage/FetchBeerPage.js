import React, { Component } from 'react'
import { Container, Grid, Divider } from 'semantic-ui-react'
import ReviewCards from './ReviewCards/ReviewCards'
import FetchBeerCard from './FetchBeerCards/FetchBeerCard'

class FetchBeerPage extends Component {
  render() {
    let beer = this.props.history.location.state
    return (
      <Container>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <FetchBeerCard fetchBeer={beer} />
              <br />
              <Divider />
            </Grid.Column>
            <Grid.Column>
              <ReviewCards reviews={beer.reviews} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default FetchBeerPage
