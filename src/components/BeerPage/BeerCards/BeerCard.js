import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeer } from '../../../redux/actions/fetchBeer';

import { addFavorite } from '../../../redux/actions/addFavoriteBeer';
import './BeerCard.css';
import { Container, Card, Button, Image, Icon, Grid } from 'semantic-ui-react';

const BeerCard = props => {
  let disabledState = { disabled: false };
  let {
    id,
    beer_name,
    description,
    beer_label,
    brewery_name,
    style,
    abv,
    ibu
  } = props.beer;
  console.log(props);
  let { userBeers } = props;
  let thing = userBeers.find(a => {
    return a.id === id;
  });

  // console.log(thing);
  const handleClick = e => {
    e.preventDefault();
    console.log('beer card id', id);
    props.fetchBeer(id, props.history);
  };
  ////////////////////////////////////////////////////////
  const favoriteBeer = e => {
    e.preventDefault();
    e.stopPropagation();
    e.target.disabled = true;
    props.addFavorite(props.user_id, id, props.history);
  };
  let boo =
    thing !== undefined
      ? (disabledState.disabled = true)
      : (disabledState.disabled = false);
  // console.log(boo);
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  return (
    <Card onClick={handleClick} className="beer-card">
      <Image src={beer_label} />
      <Card.Content>
        <Card.Header>{beer_name}</Card.Header>
        <Card.Description>{brewery_name}</Card.Description>
        <Card.Description>{style}</Card.Description>
        <Card.Description>ABV: {abv}</Card.Description>
        <Card.Description>IBU: {ibu || 'N/A'}</Card.Description>
        <br />
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Button
        className="favorite"
        disabled={disabledState.disabled}
        secondary
        onClick={favoriteBeer}
        class="ui basic button">
        <i className="thumbs up icon" />
        Favorite
      </Button>
    </Card>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchBeer, addFavorite }, dispatch);

const mapStateToProps = ({ auth }) => ({
  user_id: auth.user.id
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerCard);
