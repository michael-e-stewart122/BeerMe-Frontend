import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
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
      <div className="nav-bar">
        <Menu inverted>
          <Menu.Item>
            <NavLink exact to="/">
              Home
            </NavLink>
          </Menu.Item>
          {this.props.isLoggedIn ? (
            <Menu.Item>
              <NavLink exact to="/" onClick={this.handleLogout}>
                Logout
              </NavLink>
            </Menu.Item>
          ) : (
            <Menu.Item>
              <NavLink exact to="/login">
                Login
              </NavLink>
            </Menu.Item>
          )}
          {this.props.isLoggedIn ? null : (
            <Menu.Item link={false}>
              <NavLink exact to="/signup">
                Sign Up
              </NavLink>
            </Menu.Item>
          )}
        </Menu>
      </div>
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
  const { isLoggedIn } = state.auth;
  return { isLoggedIn };
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);
