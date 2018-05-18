import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const FetchBeerJumbo = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Beer me bitch</h1>
        <p className="lead">
          Here you can browse through all the beers in the land.
        </p>
        <hr className="my-2" />
        <p>Search by Name, style, abv or more!</p>
      </Jumbotron>
    </div>
  );
};

export default FetchBeerJumbo;
