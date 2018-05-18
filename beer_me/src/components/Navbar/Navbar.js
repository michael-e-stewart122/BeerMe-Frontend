import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon } from 'semantic-ui-react';
import { userLogout } from '../../redux/actions/auth_actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './Navbar.css';
class NavbarComponent extends Component {
  handleLogout = e => {
    e.preventDefault();
    this.props.userLogout();
  };
  render() {
    console.log(this.props, 'props inside the navbar compnent');
    return (
      <Menu className="nav-bar" stackable inverted>
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
        {this.props.auth.isLoggedIn ? (
          <Menu.Menu position="right">
            <Menu.Item style={{ textDecoration: 'none' }} href="/profile">
              <Icon name="user" />
              {this.props.auth.user.username}
            </Menu.Item>
            <Menu.Item
              style={{ textDecoration: 'none' }}
              exact
              to="/"
              onClick={this.handleLogout}>
              Logout
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
            <Menu.Item style={{ textDecoration: 'none' }} href="/signup">
              Sign Up
            </Menu.Item>
            <Menu.Item style={{ textDecoration: 'none' }} href="/login">
              Login
            </Menu.Item>
          </Menu.Menu>
        )}
      </Menu>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLogout: bindActionCreators(userLogout, dispatch)
  };
}

function mapStateToProps(state) {
  console.log(state);
  const { auth } = state;
  return { auth };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
