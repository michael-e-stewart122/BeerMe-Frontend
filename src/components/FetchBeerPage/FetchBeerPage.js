import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';

import FetchBeerCard from './FetchBeerCards/FetchBeerCard';

class FetchBeerPage extends Component {
  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row columns={1}>
            <Grid.Column>
              <FetchBeerCard />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default FetchBeerPage;
