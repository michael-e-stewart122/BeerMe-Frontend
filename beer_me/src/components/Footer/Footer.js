import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon, Grid } from 'semantic-ui-react';

import './Footer.css';

class FooterComponent extends Component {
  render() {
    return (
      <Menu className="foot-er" fixed="bottom" inverted>
        <Menu.Item style={{ textDecoration: 'none' }} href="/">
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item style={{ textDecoration: 'none' }} href="/beers">
          <Icon name="beer" />
          Beers
        </Menu.Item>
        <Menu.Item style={{ textDecoration: 'none' }} href="/breweries">
          <Icon name="building outline" />
          Breweries
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item style={{ textDecoration: 'none' }} href="/signup">
            About
          </Menu.Item>
          <Menu.Item
            style={{ textDecoration: 'none' }}
            href="https://github.com/carlcorsini/BeerMe-Frontend">
            <Icon name="github" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default FooterComponent;
