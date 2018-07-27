import React, { Component } from 'react'
import BeerModal from './BeerModal'
import { Grid, Segment, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { filterBeers } from '../../redux/actions/beers'

class FilterBeers extends Component {
  render() {
    let filterState = {
      filterType: 'beer_name'
    }
    return (
      <Grid centered>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Segment
              style={{
                boxShadow: '1px 1px 10px 2px rgba(30, 31, 38, 0.58)',
                marginTop: '1em',
                borderRadius: '15px 15px'
              }}
              inverted>
              <Form inverted>
                <Form.Group>
                  <Form.Field
                    defaultChecked
                    name="filter-type"
                    control="input"
                    type="radio"
                    onClick={e => {
                      filterState = { filterType: 'beer_name' }
                    }}
                  />
                  Name
                  <Form.Field
                    name="filter-type"
                    control="input"
                    type="radio"
                    onClick={e => {
                      filterState = { filterType: 'style' }
                    }}
                  />
                  Style
                </Form.Group>
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
                    placeholder="filter by name or style of beer"
                  />
                </Form.Group>
                <div style={{ textAlign: 'center' }}>
                  <BeerModal />
                </div>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ filterBeers }, dispatch)

export default connect(null, mapDispatchToProps)(FilterBeers)
