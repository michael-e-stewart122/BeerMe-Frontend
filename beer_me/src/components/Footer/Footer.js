import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon, Grid } from 'semantic-ui-react';

import './Footer.css';

class FooterComponent extends Component {
  render() {
    return (
      <Grid padded="vertically">
        <Menu fixed="bottom" footer inverted>
          <Menu.Item>
            <NavLink to="https://github.com/carlcorsini/BeerMe-Frontend">
              <Icon name="github" />
            </NavLink>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <NavLink exact to="/signup">
                About
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink to="https://github.com/carlcorsini/BeerMe-Frontend">
                <Icon name="github" />
              </NavLink>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Grid>
    );
  }
}

export default FooterComponent;
