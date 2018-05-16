
import React from 'react';
import { connect } from 'react-redux';
import { RingLoader } from 'react-spinners';
import { Container, Card, Button, Image, Icon, Grid } from 'semantic-ui-react';
import './Cards.css';


const randomizer = (breweries, max) => {
  let random = Math.floor(Math.random() * Math.floor(max));
  return breweries[random];
};
const Cards = ({ beers, breweries }) => {
  if (breweries.length < 1) {
    return <div />;
  } else {
    let randomBrewery = randomizer(breweries, 5);
    console.log(randomBrewery.id);
    return (
      <div>
        <Container className="main-cards">
          <Card.Group centered className="main-cards">
            <Card href="/beers">
              <Image src="https://learn.kegerator.com/wp-content/uploads/2014/04/beer-faucets.jpg" />
              <Card.Content>
                <Card.Header>Find a beer!</Card.Header>
                <Card.Meta />
                <Card.Description>Discover a new Beer</Card.Description>
              </Card.Content>
            </Card>
            <Card href="/breweries">
              <Image src="https://washingtonbeer.com/cms_images/bg-HeadersWorking_500-01.jpg" />
              <Card.Content>
                <Card.Header>Find a Brewery!</Card.Header>
                <Card.Meta />
                <Card.Description>Discover a new Beer</Card.Description>
              </Card.Content>
            </Card>
            <Card href={`/breweries/${randomBrewery.id}`}>
              <Image src="https://static.wixstatic.com/media/237fe9_67bed82f024247939a133ddc6325442d~mv2.jpg/v1/fill/w_980,h_413,al_c,q_85,usm_0.66_1.00_0.01/237fe9_67bed82f024247939a133ddc6325442d~mv2.webp" />
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




const mapStateToProps = ({ beers, breweries }) => ({
  beers: beers,
  breweries: breweries
});

export default connect(mapStateToProps, null)(Cards);

