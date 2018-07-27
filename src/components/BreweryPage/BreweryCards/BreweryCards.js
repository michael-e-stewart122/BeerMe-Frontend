import React from 'react'
import { connect } from 'react-redux'
import BreweryCard from './BreweryCard'
import { Container, Card } from 'semantic-ui-react'
import('./BreweryCard.css')

const BreweryCards = ({ breweries, history }) => {
  let listOfBreweries = breweries.map(brewery => (
    <BreweryCard key={brewery.id} history={history} brewery={brewery} />
  ))
  return (
    <Container className="brewery-card">
      <Card.Group centered>{listOfBreweries}</Card.Group>
    </Container>
  )
}

const mapStateToProps = ({ breweries, filterBreweries }) => {
  return filterBreweries.type === 'brewery_name'
    ? {
        breweries: breweries.filter(brewery =>
          brewery.brewery_name
            .toLowerCase()
            .includes(filterBreweries.filterBreweries)
        )
      }
    : {
        breweries: breweries.filter(brewery =>
          brewery.city.toLowerCase().includes(filterBreweries.filterBreweries)
        )
      }
}

export default connect(mapStateToProps, null)(BreweryCards)
