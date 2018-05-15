// import React from 'react';
//
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink
// } from 'reactstrap';
//
// import { Route, Redirect, Link } from 'react-router-dom';
//
// import './Navbar.css';
// export default class Example extends React.Component {
//   state = {
//     isOpen: false
//   };
//   toggle = () => {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   };
//   render() {
//     return (
//       // <Router>
//       <div>
//         <Navbar color="dark" dark expand="md">
//           <NavbarBrand href="/">BeerMe</NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <Route
//                 path="/profile"
//                 component={() => (
//                   <NavItem>
//                     <NavLink href="/login" className="nav-link">
//                       Logout
//                     </NavLink>
//                   </NavItem>
//                 )}
//               />
//               <Route
//                 path="/login"
//                 component={() => (
//                   <NavItem>
//                     <NavLink href="/signup" className="nav-link">
//                       Signup
//                     </NavLink>
//                   </NavItem>
//                 )}
//               />
//               <Route
//                 path="/cheers"
//                 component={() => (
//                   <NavItem>
//                     <NavLink href="/login" className="nav-link">
//                       Login
//                     </NavLink>
//                     <NavLink href="/signup" className="nav-link">
//                       Signup
//                     </NavLink>
//                   </NavItem>
//                 )}
//               />
//               <Route
//                 path="/beers"
//                 component={() => (
//                   <NavItem>
//                     <NavLink href="/login" className="nav-link">
//                       Login
//                     </NavLink>
//                     <NavLink href="/signup" className="nav-link">
//                       Signup
//                     </NavLink>
//                   </NavItem>
//                 )}
//               />
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//       // </Router>
//     );
//   }
// }

import React, { Component } from 'react';
import { lifecycle } from 'recompose';
import { connect } from 'react-redux';

import LoginPage from '../../components/loginpage/LoginPage';
import LoginProcess from '../thunks/loginProcess';
import selectAuthenticatedUser from '../selectors/selectAuthenticatedUser';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

export default class NavbarComponent extends Component {
  static defaultProps = {
    onLogout: () => {}
  };

  render() {
    console.log(this.props, 'navprops');
    return (
      <div>
        <Menu inverted>
          <Menu.Item>
            <NavLink exact to="/">
              Home
            </NavLink>
          </Menu.Item>
          {this.props.authenticatedUser ? (
            <Menu.Item>
              <NavLink exact to="/" onClick={this._handleClickLogout}>
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
          {this.props.authenticatedUser ? null : (
            <Menu.Item link={false}>
              <NavLink exact to="/signup">
                Sign Up
              </NavLink>
            </Menu.Item>
          )}
          <Menu.Menu position="right">
            <Menu.Item link={false}>
              <NavLink exact to="/cart">
                <i aria-hidden="true" className="cart icon" />
                Cart
              </NavLink>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </div>
    );
  }

  const mapStateToProps(state) {
    return {
      authenticateduser: selectAuthenticatedUser(state)
    }
  }

  const mapDispatchToProps(dispatch, ownProps) {
    return {
      login: credentials =>
        dispatch(LoginProcess.create(credentials, ownProps.history))
    }
  }

  const connectToStore = connect(mapStateToProps, mapDispatchToProps);

  const addLifecycle = lifecycle({
    componentDidMount() {}
  });

  export default connectToStore(addLifecycle(LoginPage));
  //   _handleClickLogout = event => {
  //     event.preventDefault();
  //     this.props.onLogout();
  //   };
}
