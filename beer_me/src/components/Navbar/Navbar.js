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
        <Menu.Item>
          <NavLink exact to="/">
            <Icon name="home" />
            Home
          </NavLink>
        </Menu.Item>
        {this.props.auth.isLoggedIn ? (
          <Menu.Menu position="right">
            <Menu.Item>
              <NavLink exact to="/profile">
                <Icon name="user" />
                {this.props.auth.user.username}
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink exact to="/" onClick={this.handleLogout}>
                Logout
              </NavLink>
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
            <Menu.Item>
              <NavLink exact to="/signup">
                Sign Up
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink exact to="/login">
                Login
              </NavLink>
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
  console.log(state.auth);
  const { auth } = state;
  return { auth };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
