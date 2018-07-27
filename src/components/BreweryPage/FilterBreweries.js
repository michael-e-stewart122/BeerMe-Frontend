import React, { Component } from 'react'
import { Grid, Segment, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { filterBreweries } from '../../redux/actions/breweries'

class FilterBreweries extends Component {
  render() {
    let filterState = {
      filterType: 'brewery_name'
    }
    return (
      <Grid centered>
        <Grid.Row columns={2}>
          <Grid.Column>
            <Segment
              style={{
                boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)',
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
                      filterState = { filterType: 'brewery_name' }
                    }}
                  />
                  Name
                  <Form.Field
                    name="filter-type"
                    control="input"
                    type="radio"
                    onClick={e => {
                      filterState = { filterType: 'location' }
                    }}
                  />
                  City
                </Form.Group>
                <Form.Group widths="equal">
                  <Form.Input
                    onChange={e =>
                      this.props.filterBreweries(
                        e.target.value,
                        filterState.filterType
                      )
                    }
                    type="text"
                    name="filter-beers"
                    id="filter-field"
                    placeholder="filter by name or city of brewery"
                  />
                </Form.Group>
              </Form>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ filterBreweries }, dispatch)

export default connect(null, mapDispatchToProps)(FilterBreweries)
