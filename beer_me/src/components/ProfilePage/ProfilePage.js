import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';

import TopSection from './TopSection/TopSection';
class ProfilePage extends Component {
  render() {
    return (
      <Container textAlign="left">
        <TopSection />
        <Divider />
      </Container>
    );
  }
}

export default ProfilePage;
