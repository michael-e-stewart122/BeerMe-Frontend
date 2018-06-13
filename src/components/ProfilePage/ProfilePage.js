import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Divider, Tab } from 'semantic-ui-react'
import TopSection from './TopSection/TopSection'
import UserBeerCards from './UserBeerCards/UserBeerCards'
import ReviewCards from './ReviewCards/ReviewCards'

class ProfilePage extends Component {
  render() {
    const panes = [
      {
        menuItem: 'Favorite Beers',
        render: () => (
          <Tab.Pane attached={false}>
            <UserBeerCards
              history={this.props.history}
              userBeers={this.props.userBeers}
            />
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Reviews',
        render: () => (
          <Tab.Pane attached={false}>
            <ReviewCards reviews={this.props.user.reviews} />
          </Tab.Pane>
        )
      }
    ]
    return this.props.userBeers === undefined ? (
      <div />
    ) : (
      <Container textAlign="left">
        <TopSection user={this.props.user} />
        <br />
        <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
      </Container>
    )
  }
}

const mapStateToProps = (state, props) => ({
  userBeers: state.auth.userBeers,
  user: state.auth.user
})

export default connect(mapStateToProps, null)(ProfilePage)
