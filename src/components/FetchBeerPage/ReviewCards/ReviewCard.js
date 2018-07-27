import React from 'react'
import './ReviewCard.css'
import { Card, Image, Rating } from 'semantic-ui-react'

const ReviewCard = props => {
  let { review_title, review_body, review_img, rating } = props.review

  return (
    <Card
      style={{
        boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
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
        <br /> <br />
        <Card.Description>{review_body}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default ReviewCard
