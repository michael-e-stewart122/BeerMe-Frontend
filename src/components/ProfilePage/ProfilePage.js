import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Divider } from 'semantic-ui-react';
import TopSection from './TopSection/TopSection';
import UserBeerCards from './UserBeerCards/UserBeerCards';
import ProfileModal from './ProfileModal';

class ProfilePage extends Component {
  render() {
    return this.props.userBeers === undefined ? (
      <div />
    ) : (
      <Container textAlign="left">
        <TopSection user={this.props.user} />
        <div style={{ margingRight: '10em' }}>
          <ProfileModal />
        </div>
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
