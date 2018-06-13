import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ReviewModal from './ReviewModal'
import { Item, Header, Button, Rating } from 'semantic-ui-react'
import { addFavorite } from '../../../redux/actions/auth_actions'

const FetchBeerCard = props => {
  let disabledState = { disabled: false }
  let {
    id,
    beer_name,
    beer_label,
    style,
    abv,
    ibu,
    description,
    reviews,
    average_rating
  } = props.fetchBeer
  let { userBeers } = props

  let findIfUserFavoritedBeer = userBeers.find(a => {
    return a.id === id
  })
  findIfUserFavoritedBeer !== undefined
    ? (disabledState.disabled = true)
    : (disabledState.disabled = false)

  const favoriteBeer = e => {
    e.preventDefault()
    e.stopPropagation()
    e.target.disabled = true
    props.addFavorite(props.user_id, id, props.history)
  }

  return (
    <div style={{ marginTop: '2em' }}>
      <Item.Group>
        <Item>
          <Item.Image
            style={{
              boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
            }}
            size="large"
            src={beer_label}
          />
          <Item.Content>
            <Header size="huge" as="a">
              {beer_name}
            </Header>
            <Item.Meta>{style}</Item.Meta>
            <Item.Description>ABV: {abv}%</Item.Description>
            <Item.Description>IBU: {ibu || 'N/A'}</Item.Description>
            <Item.Description>{description}</Item.Description>
            <br />
            <Rating
              size="huge"
              disabled
              icon="star"
              rating={average_rating}
              maxRating={5}
            />
            <br /> <br />
            <Button
              className="favorite"
              disabled={disabledState.disabled}
              secondary
              onClick={favoriteBeer}>
              <i className="heart icon" />
              Favorite
            </Button>{' '}
            <br />
            <br />
            <ReviewModal beer_id={id} />
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ addFavorite }, dispatch)

const mapStateToProps = state => {
  console.log(state)
  return { userBeers: state.auth.userBeers, user_id: state.auth.user.id }
}

export default connect(mapStateToProps, mapDispatchToProps)(FetchBeerCard)
