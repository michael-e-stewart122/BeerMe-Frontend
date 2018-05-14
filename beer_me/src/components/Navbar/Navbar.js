import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from 'react-router-dom';

export default class Example extends React.Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      // <Router>
      <div>
        <Navbar color="primary" dark expand="md">
          <NavbarBrand href="/">BeerMe</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <Route
                path="/profile"
                component={() => (
                  <NavItem>
                    <NavLink href="/login" className="nav-link">
                      Logout
                    </NavLink>
                  </NavItem>
                )}
              />
              <Route
                path="/login"
                component={() => (
                  <NavItem>
                    <NavLink href="/signup" className="nav-link">
                      Signup
                    </NavLink>
                  </NavItem>
                )}
              />
              <Route
                path="/cheers"
                component={() => (
                  <NavItem>
                    <NavLink href="/login" className="nav-link">
                      Login
                    </NavLink>
                    <NavLink href="/signup" className="nav-link">
                      Signup
                    </NavLink>
                  </NavItem>
                )}
              />
              <Route
                path="/beers"
                component={() => (
                  <NavItem>
                    <NavLink href="/login" className="nav-link">
                      Login
                    </NavLink>
                    <NavLink href="/signup" className="nav-link">
                      Signup
                    </NavLink>
                  </NavItem>
                )}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      // </Router>
    );
  }
}
