import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchBeer } from '../../../redux/actions/fetchBeer'
import { addFavorite } from '../../../redux/actions/auth_actions'
import './BeerCard.css'
import {
  Container,
  Card,
  Button,
  Image,
  Icon,
  Grid,
  Rating
} from 'semantic-ui-react'

const BeerCard = props => {
  let disabledState = { disabled: false }
  let {
    id,
    beer_name,
    description,
    beer_label,
    brewery_name,
    style,
    abv,
    ibu,
    reviews,
    average_rating
  } = props.beer

  let { userBeers } = props
  let findIfUserFavoritedBeer = userBeers.find(a => {
    return a.id === id
  })

  const handleClick = e => {
    e.preventDefault()
    console.log('beer card id', id)
    props.fetchBeer(id, props.history)
  }

  const favoriteBeer = e => {
    e.preventDefault()
    e.stopPropagation()
    e.target.disabled = true
    props.addFavorite(props.user_id, id, props.history)
  }

  findIfUserFavoritedBeer !== undefined
    ? (disabledState.disabled = true)
    : (disabledState.disabled = false)

  return (
    <Card
      style={{
        boxShadow: '1px 1px 10px 2px rgba(30, 31, 38, 0.58)'
      }}
      onClick={handleClick}>
      <Image src={beer_label} />
      <Card.Content>
        <Card.Header>{beer_name}</Card.Header>
        <Card.Description>{brewery_name}</Card.Description>
        <Card.Description>{style}</Card.Description>
        <Card.Description>ABV: {abv}</Card.Description>
        <Card.Description>IBU: {ibu || 'N/A'}</Card.Description>
        <Rating
          size="large"
          disabled
          icon="star"
          rating={average_rating}
          maxRating={5}
        />
        <br />
        <br />
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Button
        className="favorite"
        secondary
        disabled={disabledState.disabled}
        onClick={favoriteBeer}>
        <i className="heart icon" />
        Favorite
      </Button>
    </Card>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchBeer, addFavorite }, dispatch)

const mapStateToProps = ({ auth }) => ({
  user_id: auth.user.id
})

export default connect(mapStateToProps, mapDispatchToProps)(BeerCard)
