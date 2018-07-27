import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createNewBeer } from '../../redux/actions/beers'

import { Button, Modal, Form, Input } from 'semantic-ui-react'

class BeerModal extends Component {
  state = {
    addBeerAvailable: false,
    open: false,
    brewery_id: 1,
    beer_name: '',
    style: '',
    ibu: '',
    abv: '',
    beer_label:
      'https://image.freepik.com/free-vector/vector-illustration-with-fresh-lager-beer-in-a-beer-mug-on-transparent-background_1314-523.jpg'
  }
  show = dimmer => () => this.setState({ dimmer, open: true })
  close = () => this.setState({ open: false })

  handleSubmit = e => {
    let { brewery_id, beer_name, style, ibu, abv, beer_label } = this.state
    let attributes = { beer_name, style, ibu, abv, beer_label, brewery_id }
    brewery_id = Number(brewery_id)
    e.preventDefault()
    this.props.createNewBeer(brewery_id, attributes, this.props.token)
  }

  render() {
    let listOfBreweries = this.props.breweries.map(brewery => (
      <option key={brewery.id} value={brewery.id}>
        {brewery.brewery_name}
      </option>
    ))
    const { open, dimmer } = this.state
    return (
      <div>
        <Button
          disabled={!this.props.isLoggedIn}
          primary
          onClick={this.show('blurring')}>
          Add a Beer!
        </Button>
        <Modal
          basic
          centered="true"
          dimmer={dimmer}
          open={open}
          onClose={this.close}>
          <Modal.Header>Add a Beer</Modal.Header>
          <Modal.Content image>
            <Form style={{ width: '40%' }} onSubmit={this.handleSubmit}>
              <div
                style={{ textAlign: 'center' }}
                className="ui pointing below inverted black basic label">
                Brewery
              </div>
              <Form.Group widths="equal">
                <Form.Field
                  onChange={e => {
                    this.setState({ brewery_id: e.target.value })
                  }}
                  control="select">
                  {listOfBreweries}
                </Form.Field>
              </Form.Group>
              <div
                style={{ textAlign: 'center' }}
                className="ui pointing below inverted black basic label">
                Beer Name
              </div>
              <Form.Group widths="equal">
                <Form.Field
                  required
                  onChange={e => {
                    this.setState({ beer_name: e.target.value })
                  }}
                  control={Input}
                  placeholder="Beer name"
                />
              </Form.Group>
              <div
                style={{ textAlign: 'center' }}
                className="ui pointing below inverted black basic label">
                Style
              </div>
              <Form.Group widths="equal">
                <Form.Field
                  required
                  onChange={e => {
                    this.setState({ style: e.target.value })
                  }}
                  control={Input}
                  placeholder="Style"
                />
              </Form.Group>
              <div
                style={{ textAlign: 'center' }}
                className="ui pointing below inverted black basic label">
                IBU (International Bittering Unit)
              </div>
              <Form.Group widths="equal">
                <Form.Field
                  onChange={e => {
                    this.setState({ ibu: e.target.value })
                  }}
                  control={Input}
                  placeholder="IBU"
                />
              </Form.Group>
              <div
                style={{ textAlign: 'center' }}
                className="ui pointing below inverted black basic label">
                ABV (Alchol By Volume)
              </div>
              <Form.Group widths="equal">
                <Form.Field
                  required
                  onChange={e => {
                    this.setState({ abv: e.target.value })
                  }}
                  control={Input}
                  placeholder="ABV"
                />
              </Form.Group>
              <div
                style={{ textAlign: 'center' }}
                className="ui pointing below inverted black basic label">
                Add A Photo
              </div>
              <Form.Group widths="equal">
                <Form.Field
                  onChange={e => {
                    this.setState({ beer_label: e.target.value })
                  }}
                  control={Input}
                  placeholder="Image URL"
                />
              </Form.Group>
              <div style={{ textAlign: 'center' }}>
                <Button
                  icon="thumbs up"
                  inverted
                  content="submit"
                  color="green"
                  type="submit"
                />
                <Button
                  color="red"
                  inverted
                  icon="checkmark"
                  labelPosition="right"
                  content="Close"
                  onClick={this.close}
                />
              </div>
            </Form>
          </Modal.Content>
        </Modal>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createNewBeer: bindActionCreators(createNewBeer, dispatch)
  }
}

const mapStateToProps = state => ({
  breweries: state.breweries,
  token: state.auth.token,
  isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps, mapDispatchToProps)(BeerModal)
