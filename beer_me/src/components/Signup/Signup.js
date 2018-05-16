import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Container,
  Row,
  Col,
  Alert,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userSignup } from '../../redux/actions/auth_actions';

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
  };
  userSignup = e => {
    e.preventDefault();
    let {
      first_name,
      last_name,
      username,
      email,
      password,
      verify_password
    } = this.state;
    if (!password || password !== verify_password || !verify_password) {
      this.setState({
        passwordClasses: this.state.passwordClasses + ' is-invalid',
        isValid: false
      });
    } else {
      let newUser = {
        first_name,
        last_name,
        email,
        username,
        password
      };
      console.log('newUser', newUser);
      this.props.userSignup({ newUser }, this.props.history);
    }
  };

  render() {
    return (
      <Container className="main-wrapper">
        <Row style={{ marginTop: '10vh', marginBottom: '10vh' }}>
          <Col
            lg={{ size: 6, offset: 3 }}
            style={{
              border: '1px solid #c9c5c2',
              padding: 35,
              boxShadow: '3px 3px 47px 0px rgba(0,0,0,0.5)'
            }}>
            <Form onSubmit={this.userSignup}>
              <FormGroup>
                <Label for="first_name">Name</Label>
                <Input
                  type="text"
                  name="first_name"
                  id="first_name-field"
                  placeholder="First Name"
                  value={this.state.first_name}
                  onChange={e => this.setState({ first_name: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label for="last_name">Last Name</Label>
                <Input
                  type="last_name"
                  name="last_name"
                  id="last_name-field"
                  placeholder="Last Name"
                  value={this.state.last_name}
                  onChange={e => this.setState({ last_name: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="text"
                  name="email"
                  id="email-field"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label for="username">Username</Label>
                <Input
                  type="text"
                  name="username"
                  id="username-field"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={e => this.setState({ username: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password-field"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
              </FormGroup>
              <FormGroup>
                <Label for="verify_password">Verify Password</Label>
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
                {!this.state.isValid ? (
                  <Alert color="danger">Passwords do not match</Alert>
                ) : null}
              </FormGroup>
              <Button color="dark" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userSignup: bindActionCreators(userSignup, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Signup);
