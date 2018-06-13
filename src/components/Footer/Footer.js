import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

import './Footer.css'

class FooterComponent extends Component {
  render() {
    return (
      <Menu
        style={{
          boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
        }}
        className="foot-er"
        fixed="bottom"
        inverted>
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
          <Menu.Item
            style={{ textDecoration: 'none' }}
            href="https://github.com/carlcorsini/BeerMe-Frontend">
            <Icon name="github" />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default FooterComponent
