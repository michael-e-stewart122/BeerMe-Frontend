import React, { Component } from 'react';
import Cards from './Cards/Cards';
import Slideshow from './Slideshow/Slideshow';

import { Container, Header, Icon } from 'semantic-ui-react';

class HomeHeading extends Component {
  render() {
    return (
      <div>
        <Header as="h2" icon textAlign="center">
          <Icon name="users" circular />
          <Header.Content>Friends</Header.Content>
        </Header>
      </div>
    );
  }
}

export default HomeHeading;
