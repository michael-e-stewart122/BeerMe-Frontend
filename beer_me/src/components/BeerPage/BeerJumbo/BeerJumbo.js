import React from 'react';

import { Container, Header, Icon } from 'semantic-ui-react';

const BeerJumbo = props => {
  return (
    <div>
      <Header as="h2" icon textAlign="center">
        <Icon name="beer" circular />
        <Header.Content>Let's Grab a Drink!</Header.Content>
      </Header>
    </div>
  );
};

export default BeerJumbo;
