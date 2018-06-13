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
  Rating
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
          style={{ width: '30%' }}
          dimmer={dimmer}
          open={open}
          onClose={this.close}>
          <Modal.Header>Review A Beer</Modal.Header>
          <Modal.Content image>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group widths="equal">
                <Form.Field
                  onChange={e => {
                    this.setState({ review_title: e.target.value })
                  }}
                  control={Input}
                  label="Review Title"
                  placeholder="Review Title"
                />
                <Form.Field
                  onChange={e => {
                    this.setState({ review_img: e.target.value })
                  }}
                  control={Input}
                  label="Review Image"
                  placeholder="Review Image"
                />
              </Form.Group>
              <Form.Field
                onChange={e => {
                  this.setState({ review_body: e.target.value })
                }}
                control={TextArea}
                label="Review Body"
                placeholder="Review Body"
              />{' '}
              Rating <br />
              <br />
              <Rating
                maxRating={5}
                onRate={(e, d) => {
                  this.setState({ rating: d.rating })
                }}
                label="Rating"
                placeholder="Rating"
              />{' '}
              <br />
              <br />
              <Form.Field type="submit" control={Button}>
                Submit
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button
              positive
              icon="checkmark"
              labelPosition="left"
              content="Confirm Review"
              onClick={this.close}
            />
          </Modal.Actions>
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
  user: state.auth.user
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewModal)
