import React, { Component } from 'react';

import { Container, Image, Card, Icon, Item, Header } from 'semantic-ui-react';

class TopSection extends Component {
  render() {
    return (
      <Container fluid>
        <Item.Group>
          <Item>
            <Item.Image
              size="medium"
              src="https://ambassador-api.s3.amazonaws.com/generic_avatar.png"
            />
            <Item.Content>
              <Header size="huge" as="a">
                Test User
              </Header>
              <Item.Meta>San Francisco</Item.Meta>
              <Item.Description />
              <Item.Extra>Let's Drink!</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    );
  }
}

export default TopSection;
