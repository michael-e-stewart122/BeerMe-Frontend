import React from 'react';
import { connect } from 'react-redux';

import { Item, Header } from 'semantic-ui-react';

const FetchBeerCard = props => {
  console.log(props);
  let {
    id,
    beer_name,
    beer_label,
    style,
    abv,
    ibu,
    description
  } = props.fetchBeer;

  return (
    <div style={{ marginTop: '2em' }}>
      <Item.Group>
        <Item>
          <Item.Image size="large" src={beer_label} />
          <Item.Content>
            <Header size="huge" as="a">
              {beer_name}
            </Header>
            <Item.Meta>{style}</Item.Meta>
            <Item.Description>ABV: {abv}</Item.Description>
            <Item.Description>IBU: {ibu || 'N/A'}</Item.Description>
            <Item.Description>{description}</Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
};

export default FetchBeerCard;
