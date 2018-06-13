import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createNewBeer } from '../../redux/actions/beers'
import selectAuthenticatedUser from '../../redux/selectors/selectAuthenticatedUser'
import { userSignup } from '../../redux/actions/auth_actions'

import {
  Popup,
  Button,
  Header,
  Image,
  Modal,
  Form,
  Input,
  Select,
  Message,
  Menu
} from 'semantic-ui-react'

class SignupModal extends Component {
  state = {
    isValid: true,
    isPasswordStrong: true,
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    password: '',
    verify_password: ''
  }
  userSignup = e => {
    e.preventDefault()

    let {
      first_name,
      last_name,
      username,
      email,
      password,
      verify_password
    } = this.state

    if (!password || password !== verify_password || !verify_password) {
      this.setState({
        isValid: false
      })
    } else {
      let newUser = {
        first_name,
        last_name,
        email,
        username,
        password
      }

      this.props.userSignup(newUser, this.props.history)
    }
  }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })
  render() {
    const { open, dimmer } = this.state
    return (
      <div>
        <Menu.Item
          style={{ textDecoration: 'none' }}
          inverted
          onClick={this.show('blurring')}>
          Sign Up
        </Menu.Item>

        <Modal
          basic
          style={{ width: '25%' }}
          dimmer={dimmer}
          open={open}
          onClose={this.close}>
          <Header>Sign Up</Header>
          <Modal.Content style={{ paddingTop: '1px' }} image>
            <Form success warning onSubmit={this.userSignup}>
              <Form.Group widths="equal">
                <Input
                  required
                  type="text"
                  name="first_name"
                  id="first_name-field"
                  placeholder="First Name"
                  value={this.state.first_name}
                  onChange={e => this.setState({ first_name: e.target.value })}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <br />
                <Input
                  required
                  type="last_name"
                  name="last_name"
                  id="last_name-field"
                  placeholder="Last Name"
                  value={this.state.last_name}
                  onChange={e => this.setState({ last_name: e.target.value })}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <br />
                <Input
                  type="email"
                  name="email"
                  id="email-field"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <br />
                <Input
                  required
                  type="text"
                  name="username"
                  id="username-field"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={e => this.setState({ username: e.target.value })}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <br />
                <Input
                  required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  onInvalid={e => this.setState({ isPasswordStrong: false })}
                  type="password"
                  name="password"
                  id="password-field"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </Form.Group>
              <Form.Group widths="equal">
                <br />
                <Input
                  required
                  type="password"
                  name="password"
                  id="verify_password"
                  placeholder="Verify Password"
                  value={this.state.verify_password}
                  onChange={e =>
                    this.setState({ verify_password: e.target.value })
                  }
                />
              </Form.Group>
              <Button
                basic
                content="Sign Up"
                inverted
                color="green"
                type="submit"
              />
              <Button
                basic
                inverted
                color="red"
                content="Close"
                onClick={this.close}
              />
              {!this.state.isPasswordStrong ? (
                <Message
                  color="red"
                  inverted
                  warning
                  header="Password must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                />
              ) : null}
              {!this.state.isValid ? (
                <Message
                  color="red"
                  inverted
                  warning
                  header="passwords do not match"
                />
              ) : null}
              {this.props.showSignupSuccess ? (
                <Message
                  color="green"
                  inverted
                  success
                  header="signup successful!"
                />
              ) : null}
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    showSignupSuccess: state.auth.showSignupSuccess,
    open: state.auth.open
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userSignup: bindActionCreators(userSignup, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal)
