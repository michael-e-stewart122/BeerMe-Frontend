import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createNewReview } from '../../../redux/actions/beers'

import {
  Popup,
  Button,
  Header,
  Image,
  Modal,
  Form,
  Input,
  TextArea,
  Select,
  Rating,
  Message
} from 'semantic-ui-react'

class ReviewModal extends Component {
  state = {
    open: false,
    beer_id: this.props.beer_id,
    review_title: '',
    review_body: '',
    rating: 0,
    review_img: ''
  }

  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  handleSubmit = e => {
    let { beer_id, review_title, review_body, rating, review_img } = this.state
    let attributes = {
      beer_id,
      review_title,
      review_body,
      rating,
      review_img
    }
    e.preventDefault()
    attributes.user_id = this.props.user.id
    console.log(this.props.user.id)
    console.log(attributes)
    this.props.createNewReview(attributes, this.props.token)
  }

  render() {
    const { open, dimmer } = this.state
    console.log(this.props.user.id, 'user id')
    console.log(this.state)
    console.log(this.props.token)
    return (
      <div>
        <Button
          // className="review"
          // disabled={disabledState.disabled}
          secondary
          onClick={this.show('blurring')}>
          <i className="edit icon" />
          Write Review
        </Button>

        <Modal
          centered="true"
          basic
          dimmer={dimmer}
          open={open}
          onClose={this.close}>
          <Modal.Header>What did you think?</Modal.Header>

          <Modal.Content image>
            <Form success style={{ width: '60%' }} onSubmit={this.handleSubmit}>
              <br />

              <div class="ui pointing below inverted black basic label">
                Headline
              </div>
              <Form.Group widths="equal">
                <br />
                <br />
                <Form.Field
                  required
                  inverted
                  style={{ color: '#ffffff !important' }}
                  labelColor="white"
                  color="white"
                  onChange={e => {
                    this.setState({ review_title: e.target.value })
                  }}
                  control={Input}
                  placeholder="What's most important to know?"
                />
              </Form.Group>
              <div class="ui pointing below inverted black basic label">
                Add a 'pitcher' it'll last longer...
              </div>
              <Form.Group widths="equal">
                <br />
                <br />
                <Form.Field
                  onChange={e => {
                    this.setState({ review_img: e.target.value })
                  }}
                  control={Input}
                  placeholder="Photo URL (optional)"
                />
              </Form.Group>
              <div class="ui pointing below inverted black basic label">
                Review
              </div>
              <Form.Field
                maxLength="750"
                required
                onChange={e => {
                  this.setState({ review_body: e.target.value })
                }}
                control={TextArea}
                placeholder="Write your review here. What did you like the most? What did you like the least?"
              />
              <br />
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{ textAlign: 'center' }}
                  class="ui pointing below inverted orange basic label">
                  Rate Here!
                </div>
                <br />
                <Rating
                  size="massive"
                  maxRating={5}
                  defaultRating={3}
                  onRate={(e, d) => {
                    this.setState({ rating: d.rating })
                  }}
                />
              </div>
              <br />
              <br />
              <div style={{ textAlign: 'center' }}>
                <Button
                  icon="thumbs up"
                  inverted
                  labelPosition="left"
                  color="green"
                  type="submit"
                  content="Submit"
                />
                <Button
                  inverted
                  color="red"
                  icon="close"
                  labelPosition="left"
                  content="Close"
                  onClick={this.close}
                />
              </div>
              {this.props.createReviewSuccess ? (
                <Message
                  color="green"
                  inverted
                  success
                  header="Review Created!"
                />
              ) : null}
              {this.props.createReviewSuccess == false ? (
                <Message color="red" inverted success header="Review Failed" />
              ) : null}
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createNewReview: bindActionCreators(createNewReview, dispatch)
  }
}

const mapStateToProps = state => ({
  breweries: state.breweries,
  token: state.auth.token,
  user: state.auth.user,
  createReviewSuccess: state.beers.createReviewSuccess
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewModal)
