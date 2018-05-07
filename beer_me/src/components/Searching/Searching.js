import React from 'react';
import './Searching.css';
import { Grid, Image } from 'semantic-ui-react';

const Searching = () => (
  <Grid columns="three" divided>
    <Grid.Row>
      <Grid.Column>
        <Image
          className="beer_search_img"
          src="https://cdn.britannica.com/700x450/72/186972-049-26ACDCBE.jpg"
        />
        <h1> Search Beer</h1>
      </Grid.Column>
      <Grid.Column>
        <Image
          className="brewery_search_img"
          src="http://0104.nccdn.net/1_5/025/200/258/banner---temp-3.jpg"
        />
        <h1>Search Brewery</h1>
      </Grid.Column>
      <Grid.Column>
        <Image
          className="brewery_of_month_img"
          src="https://pbs.twimg.com/profile_images/885917064828862464/ErVbyAIR.jpg"
        />
        <h1>Brewery of the Month!</h1>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Searching;
