import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateProfile } from '../../redux/actions/updateUser';
import { destroyUser } from '../../redux/actions/deleteUser';
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

class ProfileModal extends Component {
  state = {
    open: false,
    first_name: '',
    last_name: '',
    username: '',
    location: ''
  };
  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  handleSubmit = e => {
    let { first_name, last_name, username, location } = this.state;
    let attributes = { first_name, last_name, username, location };
    console.log(attributes);
    e.preventDefault();
    this.props.updateProfile(1, attributes);
  };

  handleDelete = e => {
    e.preventDefault();
    this.props.destroyUser(1);
  };

  render() {
    console.log(this.state);
    const { open, dimmer } = this.state;
    const options = [
      { key: 'm', text: 'Male', value: 'male' },
      { key: 'f', text: 'Female', value: 'female' }
    ];
    return (
      <div style={{ marginRight: '10em' }}>
        <Button onClick={this.show('blurring')}>Edit</Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Edit Profile</Modal.Header>
          <Modal.Content image>
            <Image
              wrapped
              size="medium"
              src="https://avatars2.githubusercontent.com/u/28901454?s=460&v=4"
            />
            <Modal.Description>
              <Header>{'   '}</Header>
            </Modal.Description>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({ first_name: e.target.value });
                  }}
                  control={Input}
                  label="First name"
                  placeholder="First name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({ last_name: e.target.value });
                  }}
                  control={Input}
                  label="Last name"
                  placeholder="Last name"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({ username: e.target.value });
                  }}
                  control={Input}
                  label="UserName"
                  placeholder="UserName"
                />
              </Form.Group>
              <Form.Group>
                <Form.Field
                  onChange={e => {
                    this.setState({ location: e.target.value });
                  }}
                  control={Input}
                  label="Location"
                  placeholder="Location"
                />
              </Form.Group>
              <Form.Field type="submit" control={Button}>
                Submit
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.handleDelete} color="black">
              Delete Profile
            </Button>
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
    updateProfile: bindActionCreators(updateProfile, dispatch),
    destroyUser: bindActionCreators(destroyUser, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(ProfileModal);
