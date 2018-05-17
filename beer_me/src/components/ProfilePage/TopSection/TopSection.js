import React, { Component } from 'react';

import { Container, Image, Card, Icon, Item, Header } from 'semantic-ui-react';
import './TopSection.css';
class TopSection extends Component {
  render() {
    console.log(this.props, 'top section props');
    let {
      first_name,
      last_name,
      location,
      profile_pic,
      username
    } = this.props.user;
    return (
      <Container className="top-section" fluid>
        <Item.Group>
          <Item>
            <Item.Image size="medium" src={profile_pic} />
            <Item.Content>
              <Header size="huge" as="a">
                {`${first_name} ${last_name}`}
              </Header>
              <Item.Meta>{location}</Item.Meta>
              <Item.Description />
              <Item.Extra>{username}</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Container>
    );
  }
}

export default TopSection;
