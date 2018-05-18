import React, { Component } from 'react';
import Cards from './Cards/Cards';
import Slideshow from './Slideshow/Slideshow';
import HomeHeading from './HomeHeading';
import { Container, Grid } from 'semantic-ui-react';

class Main extends Component {
  render() {
    console.log('this.state', this.state);
    return (
      <Container>
        <Grid padded="vertically" divided="vertically">
          <Grid.Row columns={1}>
            <Grid.Column>
              <HomeHeading />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Slideshow />
          </Grid.Row>
          <Grid.Row>
            <Cards history={this.props.history} />
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

export default Main;
