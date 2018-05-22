import React, { Component } from 'react';
import BeerModal from './BeerModal';
import { Grid, Segment, Form, Radio } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterBeers } from '../../redux/actions/beers';

class FilterBeers extends Component {
  render() {
    let filterState = {
      filterType: 'beer_name'
    };
    console.log(filterState, 'filter Type');
    return (
      <Grid centered>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Segment inverted>
              <Form inverted>
                <Form.Group centered>
                  <Form.Field
                    defaultChecked
                    name="filter-type"
                    control="input"
                    type="radio"
                    onClick={e => {
                      filterState = { filterType: 'beer_name' };
                      console.log(filterState);
                    }}
                  />
                  Name
                  <Form.Field
                    name="filter-type"
                    control="input"
                    type="radio"
                    onClick={e => {
                      filterState = { filterType: 'style' };
                      console.log(filterState);
                    }}
                  />
                  Style
                </Form.Group>
                Filter:
                <Form.Group widths="equal">
                  <Form.Input
                    onChange={e =>
                      this.props.filterBeers(
                        e.target.value,
                        filterState.filterType
                      )
                    }
                    type="text"
                    name="filter-beers"
                    id="filter-field"
                  />
                </Form.Group>
                <BeerModal />
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ filterBeers }, dispatch);

export default connect(null, mapDispatchToProps)(FilterBeers);
