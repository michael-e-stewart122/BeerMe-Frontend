import React from 'react';

import { Container, Header, Icon } from 'semantic-ui-react';

const BreweryJumbo = props => {
  return (
    <div style={{ marginTop: '2em' }}>
      <Header as="h2" icon textAlign="center">
        <Icon name="beer" circular />
        <Header.Content>Find Your Watering Hole</Header.Content>
      </Header>
    </div>
  );
};

export default BreweryJumbo;
