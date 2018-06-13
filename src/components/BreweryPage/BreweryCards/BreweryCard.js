import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchBrewery } from '../../../redux/actions/fetchBrewery'
import { Card, Image } from 'semantic-ui-react'

const BreweryCard = props => {
  let { id, brewery_name, brewery_logo, city, state } = props.brewery

  const handleClick = e => {
    e.preventDefault()
    props.fetchBrewery(id, props.history)
  }

  return (
    <Card
      style={{
        boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
      }}
      onClick={handleClick}>
      <Image src={brewery_logo} alt="Card image cap" />
      <Card.Content>
        <Card.Header>{brewery_name}</Card.Header>
        <Card.Meta>{city}</Card.Meta>
        <Card.Meta>{state}</Card.Meta>
      </Card.Content>
    </Card>
  )
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchBrewery }, dispatch)

export default connect(null, mapDispatchToProps)(BreweryCard)
