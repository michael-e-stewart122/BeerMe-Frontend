import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createNewBeer } from '../../redux/actions/createBeer';

import {
  Popup,
  Button,
  Header,
  Image,
  Modal,
  Form,
  Input,
  Select
} from 'semantic-ui-react';

// data.forEach(a => {
//       $(selectMenu).append(` <option name="${a.img}" value="${a.img}">${a.title}</option>`);
//     })

class BeerModal extends Component {
  state = {
    open: false,
    brewery_id: 1,
    beer_name: '',
    style: '',
    ibu: '',
    abv: '',
    beer_label: ''
  };
  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  handleSubmit = e => {
    let { brewery_id, beer_name, style, ibu, abv, beer_label } = this.state;
    let attributes = { beer_name, style, ibu, abv, beer_label };
    console.log(attributes, brewery_id);
    brewery_id = parseInt(brewery_id);
    e.preventDefault();
    console.log(this.props);
    this.props.createNewBeer(brewery_id, attributes);
  };

  render() {
    console.log(this.props);
    let listOfBreweries = this.props.breweries.map(brewery => (
      <option value={brewery.id}>{brewery.brewery_name}</option>
    ));
    const { open, dimmer } = this.state;

    return (
      <div>
        <Button onClick={this.show('blurring')}>Add a Beer!</Button>

        <Modal
          observeChanges={true}
          dimmer={dimmer}
          open={open}
          onClose={this.close}>
          <Modal.Header>Add a Beer</Modal.Header>
          <Modal.Content image>
            <Form widths="equal" onSubmit={this.handleSubmit}>
              <Form.Field
                onChange={e => {
                  this.setState({ brewery_id: e.target.value });
                }}
                label="Brewery"
                control="select">
                {listOfBreweries}
              </Form.Field>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({ beer_name: e.target.value });
                  }}
                  control={Input}
                  label="Beer name"
                  placeholder="Beer name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({ style: e.target.value });
                  }}
                  control={Input}
                  label="Style"
                  placeholder="Style"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({ ibu: e.target.value });
                  }}
                  control={Input}
                  label="IBU"
                  placeholder="IBU"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({ abv: e.target.value });
                  }}
                  control={Input}
                  label="ABV"
                  placeholder="ABV"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({ beer_label: e.target.value });
                  }}
                  control={Input}
                  label="Beer Logo"
                  placeholder="Beer Logo"
                />
              </Form.Group>
              <Form.Field type="submit" control={Button}>
                Submit
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button
              positive
              icon="checkmark"
              labelPosition="right"
              content="Confirm Changes"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createNewBeer: bindActionCreators(createNewBeer, dispatch)
  };
}

const mapStateToProps = ({ breweries }) => ({
  breweries
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerModal);
