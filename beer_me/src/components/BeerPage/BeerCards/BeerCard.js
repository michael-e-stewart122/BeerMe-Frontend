import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeer } from '../../../redux/actions/fetchBeer';

import { addFavorite } from '../../../redux/actions/addFavoriteBeer';

import { Container, Card, Button, Image, Icon, Grid } from 'semantic-ui-react';
import './BeerCard.css';

const BeerCard = props => {
  let { id, beer_name, beer_label, brewery_name, style, abv, ibu } = props.beer;
  let { userBeers } = props;
  console.log(userBeers);
  let thing = userBeers.find(a => {
    return a.id === id;
  });

  console.log(thing);
  const handleClick = e => {
    e.preventDefault();
    props.fetchBeer(id, props.history);
  };
  ////////////////////////////////////////////////////////
  const favoriteBeer = e => {
    e.preventDefault();
    e.stopPropagation();
    props.addFavorite(props.user_id, id, props.history);
  };
  let boo = thing !== undefined ? true : false;
  console.log(boo);
  //////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  return (
    <Card onClick={handleClick} className="beer-card">
      <Image src={beer_label} />
      <Card.Content>
        <Card.Header>{beer_name}</Card.Header>
        <Card.Description>{style}</Card.Description>
      </Card.Content>
      <Button
        disabled={boo}
        className="favorite"
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
  // console.log('auth', auth);
  user_id: auth.user.id
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerCard);
