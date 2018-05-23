import React, { Component } from 'react';

import {
  Button,
  Form,
  Container,
  Grid,
  Input,
  Message,
  Segment
} from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userLogin } from '../../redux/actions/auth_actions';
import { userLogout } from '../../redux/actions/auth_actions';
import selectAuthenticatedUser from '../../redux/selectors/selectAuthenticatedUser';

class Login extends Component {
  state = {
    showLoginError: false,
    email: '',
    password: ''
  };

  handleLogin = e => {
    e.preventDefault();
    this.props.userLogin(
      {
        email: this.state.email,
        password: this.state.password
      },
      this.props.history
    );
  };

  render() {
    console.log("i'm in login component!!!!!!!!");

    return (
      <Container fluid inverted className="main-wrapper">
        <Grid columns={3} centered>
          <Grid.Row inverted style={{ marginTop: '15vh' }}>
            <Grid.Column
              style={{
                border: '1px solid #c9c5c2',
                borderRadius: '10%',
                padding: 0,
                boxShadow: '3px 3px 47px 0px rgba(0,0,0,0.5)'
              }}
              inverted>
              <Segment inverted>
                <Form centered inverted onSubmit={this.handleLogin}>
                  Email:
                  <Form.Group centered widths="equal">
                    <Input
                      type="email"
                      name="email"
                      id="email-field"
                      placeholder="email"
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value })}
                    />
                  </Form.Group>
                  <br />
                  Password:
                  <Form.Group widths="equal">
                    <Input
                      type="password"
                      name="password"
                      id="pass-field"
                      placeholder="password"
                      value={this.state.password}
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </Form.Group>
                  {this.props.showLoginError ? (
                    <Message warning>
                      <Message.Header>
                        Either your email or password is incorrect. Please try
                        again.
                      </Message.Header>
                    </Message>
                  ) : null}
                  <Button className="mr-3" type="submit" color="dark">
                    Submit
                  </Button>
                  <a color="black" href="/signup">
                    Not a member?
                  </a>
                </Form>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    showLoginError: state.auth.showLoginError,
    authenticatedUser: selectAuthenticatedUser(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userLogin: bindActionCreators(userLogin, dispatch),
    userLogout: bindActionCreators(userLogout, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
