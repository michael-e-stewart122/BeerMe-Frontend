import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { RingLoader } from 'react-spinners';
import { Container, Card, Button, Image, Icon, Grid } from 'semantic-ui-react';
import './Cards.css';

import { fetchBrewery } from '../../../redux/actions/fetchBrewery';
import { fetchBreweryBeer } from '../../../redux/actions/beersByBrewery';

const randomizer = (breweries, max) => {
  let random = Math.floor(Math.random() * Math.floor(max));
  return breweries[random];
};
const Cards = props => {
  // console.log(props);
  if (props.breweries.length < 1) {
    return <div />;
  } else {
    let randomBrewery = randomizer(props.breweries, 10);
    const handleClick = e => {
      e.preventDefault();
      props.fetchBrewery(randomBrewery.id, props.history);
    };

    return (
      <div>
        <Container className="main-cards">
          <Card.Group centered className="main-cards">
            <Card
              style={{ textDecoration: 'none' }}
              exact
              to="/profile"
              href="/beers">
              <Image src="https://i.imgur.com/36BQXYi.png" />
              <Card.Content>
                <Card.Header>Find a beer!</Card.Header>
                <Card.Meta />
                <Card.Description>Discover a new Beer</Card.Description>
              </Card.Content>
            </Card>
            <Card
              style={{ textDecoration: 'none' }}
              exact
              to="/profile"
              href="/breweries">
              <Image src="https://i.imgur.com/6kDIntc.png" />
              <Card.Content>
                <Card.Header>Find a Brewery!</Card.Header>
                <Card.Meta />
                <Card.Description>Discover a new Beer</Card.Description>
              </Card.Content>
            </Card>
            <Card onClick={handleClick}>
              <Image src="https://i.imgur.com/ljiOSxT.png" />
              <Card.Content>
                <Card.Header>{randomBrewery.brewery_name}</Card.Header>
                <Card.Meta />
                <Card.Description>{randomBrewery.address}</Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchBrewery, fetchBreweryBeer }, dispatch);

const mapStateToProps = ({ beers, breweries }) => ({
  beers: beers,
  breweries: breweries
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
