import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import { userLogout } from '../../redux/actions/auth_actions';
import { connect } from 'react-redux';
class NavbarComponent extends Component {
  static defaultProps = {
    userLogout: userLogout
  };
  handleLogout = e => {
    e.preventDefault();
    // console.log(this.props.history);
    // console.log(userLogout());
    userLogout();
    localStorage.removeItem('token');
  };
  render() {
    console.log(this.props, 'props inside the navbar compnent');
    return (
      <div>
        <Menu inverted>
          <Menu.Item>
            <NavLink exact to="/">
              Home
            </NavLink>
          </Menu.Item>
          {this.props.user !== undefined ? (
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
          {this.props.user === {} ? null : (
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
function mapStateToProps(state) {
  console.log('login state2', state);
  const { user } = state.auth;
  return { hey: 'guy' };
  //   {
  // showLoginError: state.auth.showLoginError,
  // authenticatedUser: selectAuthenticatedUser(state)
  //  };
}

export default connect(mapStateToProps)(NavbarComponent);
