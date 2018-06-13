import React, { Component } from 'react'

import {
  Button,
  Form,
  Container,
  Grid,
  Input,
  Message,
  Segment
} from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { userSignup } from '../../redux/actions/auth_actions'

export class Signup extends Component {
  state = {
    isValid: true,
    passwordClasses: 'form-control',
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
      console.log('bad!')
      this.setState({
        isValid: false
      })
      console.log(this.state)
    } else {
      let newUser = {
        first_name,
        last_name,
        email,
        username,
        password
      }
      console.log('newUser', newUser)
      this.props.userSignup(newUser, this.props.history)
    }
  }

  render() {
    return (
      <Container fluid inverted className="main-wrapper">
        <Grid columns={3} centered>
          <Grid.Row style={{ marginTop: '15vh' }}>
            <Grid.Column
              style={{
                border: '1px solid #c9c5c2',
                padding: 0,
                boxShadow: '3px 3px 47px 0px rgba(0,0,0,0.5)'
              }}>
              <Segment inverted>
                <Form warning centered inverted onSubmit={this.userSignup}>
                  <Form.Group centered widths="equal">
                    Name
                    <br />
                    <Input
                      type="text"
                      name="first_name"
                      id="first_name-field"
                      placeholder="First Name"
                      value={this.state.first_name}
                      onChange={e =>
                        this.setState({ first_name: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <br />
                    Last Name
                    <Input
                      type="last_name"
                      name="last_name"
                      id="last_name-field"
                      placeholder="Last Name"
                      value={this.state.last_name}
                      onChange={e =>
                        this.setState({ last_name: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    Email
                    <br />
                    <Input
                      type="text"
                      name="email"
                      id="email-field"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value })}
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    <br />
                    Username
                    <Input
                      type="text"
                      name="username"
                      id="username-field"
                      placeholder="Username"
                      value={this.state.username}
                      onChange={e =>
                        this.setState({ username: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    Password
                    <br />
                    <Input
                      minLength="8"
                      type="password"
                      name="password"
                      id="password-field"
                      placeholder="Password"
                      value={this.state.password}
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </Form.Group>
                  <Form.Group widths="equal">
                    Password
                    <br />
                    <Input
                      type="password"
                      name="password"
                      id="verify_password"
                      placeholder="Password"
                      value={this.state.verify_password}
                      onChange={e =>
                        this.setState({ verify_password: e.target.value })
                      }
                    />
                    {this.state.isValid == false ? (
                      <Message warning header="Passwords do not match" />
                    ) : null}
                  </Form.Group>
                  <Button color="dark" type="submit">
                    Submit
                  </Button>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userSignup: bindActionCreators(userSignup, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Signup)
