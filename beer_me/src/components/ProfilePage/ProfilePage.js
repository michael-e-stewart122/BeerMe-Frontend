import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Divider } from 'semantic-ui-react';

import TopSection from './TopSection/TopSection';
import UserBeerCards from './UserBeerCards/UserBeerCards';
class ProfilePage extends Component {
  render() {
    console.log(this.props);
    return this.props.userBeers == undefined ? (
      <div />
    ) : (
      <Container textAlign="left">
        <TopSection user={this.props.user} />
        <Divider />
        <UserBeerCards
          history={this.props.history}
          userBeers={this.props.userBeers}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state, props) => ({
  // console.log(state.auth.userBeers, 'profile state');
  userBeers: state.auth.userBeers,
  user: state.auth.user
});

export default connect(mapStateToProps, null)(ProfilePage);
