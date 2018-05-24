import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBeer } from '../../../redux/actions/fetchBeer';
import { Card, Image } from 'semantic-ui-react';

const UserBeerCard = props => {
  let { id, beer_name, beer_label, style, abv, ibu } = props.beer;

  const handleClick = e => {
    e.preventDefault();
    props.fetchBeer(id, props.history);
  };

  return (
    <Card onClick={handleClick} className="beer-card">
      <Image top src={beer_label} alt="Card image cap" />
      <Card.Content>
        <Card.Header>{beer_name}</Card.Header>
        <Card.Description>{style}</Card.Description>
      </Card.Content>
    </Card>
  );
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchBeer }, dispatch);

export default connect(null, mapDispatchToProps)(UserBeerCard);
