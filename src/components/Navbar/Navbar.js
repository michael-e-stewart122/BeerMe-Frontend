import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import { userLogout } from '../../redux/actions/auth_actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoginModal from './LoginModal'
import SignupModal from './SignupModal'
import './Navbar.css'
class NavbarComponent extends Component {
  handleLogout = e => {
    e.preventDefault()
    this.props.userLogout()
  }
  render() {
    return (
      <Menu
        style={{
          boxShadow: '1px 1px 10px 0.5px rgba(30, 31, 38, 0.58)'
        }}
        className="nav-bar"
        stackable
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
        {this.props.auth.isLoggedIn ? (
          <Menu.Menu position="right">
            <Menu.Item style={{ textDecoration: 'none' }} href="/profile">
              <Icon name="user" />
              {this.props.auth.user.username}
            </Menu.Item>
            <Menu.Item
              style={{ textDecoration: 'none' }}
              to="/"
              onClick={this.handleLogout}>
              Logout
            </Menu.Item>
          </Menu.Menu>
        ) : (
          <Menu.Menu position="right">
            <SignupModal />
            <LoginModal />
          </Menu.Menu>
        )}
      </Menu>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userLogout: bindActionCreators(userLogout, dispatch)
  }
}

function mapStateToProps(state) {
  const { auth } = state
  return { auth }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)
