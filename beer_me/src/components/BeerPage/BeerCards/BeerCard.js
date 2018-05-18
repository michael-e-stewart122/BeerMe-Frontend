import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeer } from '../../../redux/actions/fetchBeer';

import { addFavorite } from '../../../redux/actions/addFavoriteBeer';

import { Container, Card, Button, Image, Icon, Grid } from 'semantic-ui-react';
import './BeerCard.css';

const BeerCard = props => {

  let { id, beer_name, beer_label, brewery_name, style, abv, ibu } = props.beer;
  console.log('props.....', props);
  // console.log('state......', state);


  const handleClick = e => {
    e.preventDefault();
    props.fetchBeer(id, props.history);
  };
  ////////////////////////////////////////////////////////
  const favoriteBeer = e => {
    e.preventDefault();
    // console.log('button working');
    // console.log('id on click', id);
    props.addFavorite(props.user_id, id);
  };
  //////////////////////////////////////////////////////////
  return (

    <div>
      <Card onClick={handleClick} className="beer-card">
        <Image src={beer_label} />
        <Card.Content>
          <Card.Header>{beer_name}</Card.Header>
          <Card.Description>{style}</Card.Description>

          <Card.Meta />
        </Card.Content>
      </Card>
      <Button onClick={favoriteBeer} class="ui basic button">
        <i class="thumbs up icon" />
        Favorite
      </Button>
    </div>

  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchBeer, addFavorite }, dispatch);

const mapStateToProps = ({ auth }) => ({
  // console.log('auth', auth);
  user_id: auth.user.id
});

export default connect(mapStateToProps, mapDispatchToProps)(BeerCard);
