import React, { Component } from "react"
import { Input, Menu } from "semantic-ui-react"

class Navbar extends Component {
  state = { activeItem: "home" }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Sign Up"
          active={activeItem === "messages"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="Login"
          active={activeItem === "friends"}
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name="Logout"
          active={activeItem === "logout"}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}

export default Navbar
