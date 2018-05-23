import React from 'react';

import { Container, Header, Icon, Image } from 'semantic-ui-react';

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
  } = props.breweryBeers[0];
  console.log(props);
  return (
    <div style={{ marginTop: '2em' }}>
      <Image centered="true" src={brewery_logo} />
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
  );
};

export default FetchBreweryJumbo;
