import React from 'react'

import { Header, Image } from 'semantic-ui-react'

const FetchBreweryJumbo = props => {
  let {
    brewery_name,
    brewery_logo,
    address,
    city,
    phone,
    state,
    zip,
    url
  } = props.brewery

  return (
    <div style={{ marginTop: '2em' }}>
      <Image
        style={{
          borderRadius: '10px 10px',
          boxShadow: '1px 1px 10px 1px rgba(30, 31, 38, 0.58)'
        }}
        centered
        src={brewery_logo}
      />
      <Header as="h2" textAlign="center" attached="top">
        <Header.Content>{brewery_name}</Header.Content> <br />
        <Header.Content>{address}</Header.Content> <br />
        <Header.Content>{city + ' ' + state + ', ' + zip}</Header.Content>{' '}
        <br />
        <Header.Content>{phone}</Header.Content> <br />
        <Header.Content size="medium" href={url}>
          Visit {brewery_name}'s Website
        </Header.Content>
      </Header>
    </div>
  )
}

export default FetchBreweryJumbo
