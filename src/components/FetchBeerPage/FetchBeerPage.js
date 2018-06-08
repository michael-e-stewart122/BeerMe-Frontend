import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

import FetchBeerCard from './FetchBeerCards/FetchBeerCard';

class FetchBeerPage extends Component {
  render() {
    console.log(this.props.history);
    let beer = this.props.history.location.state;
    return (
      <Container>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <FetchBeerCard fetchBeer={beer} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default FetchBeerPage;
