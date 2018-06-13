import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './ReviewCard.css'
import {
  Container,
  Card,
  Button,
  Image,
  Icon,
  Grid,
  Rating
} from 'semantic-ui-react'

const ReviewCard = props => {
  let disabledState = { disabled: false }
  let { id, review_title, review_body, review_img, rating } = props.review

  return (
    <Card
      style={{
        boxShadow: '1px 1px 10px 2px rgba(30, 31, 38, 0.58)'
      }}
      className="beer-card">
      <Image src={review_img} />
      <Card.Content>
        <Card.Header>{review_title}</Card.Header>
        <br />
        <Rating
          size="large"
          disabled
          icon="star"
          rating={rating}
          maxRating={5}
        />
        <br />
        <br />
        <Card.Description>{review_body}</Card.Description>
      </Card.Content>
      <Button color="red" className="favorite">
        <i className="delete icon" />
        Delete Review
      </Button>
    </Card>
  )
}

export default ReviewCard
