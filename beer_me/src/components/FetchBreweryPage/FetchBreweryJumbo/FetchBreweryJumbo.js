import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const FetchBreweryJumbo = props => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Breweries are fun!</h1>
        <p className="lead">Find your watering hole.</p>
        <hr className="my-2" />
        <p>YAY!!</p>
      </Jumbotron>
    </div>
  );
};

export default FetchBreweryJumbo;
