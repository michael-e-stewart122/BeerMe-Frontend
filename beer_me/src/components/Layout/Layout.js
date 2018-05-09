import React, { Component } from 'react';
import './Layout.css';
import { Grid, Image } from 'semantic-ui-react';

const Layout = () => (
  <Grid verticalAlign="middle" columns={4} centered>
    <Grid.Row>
      <Grid.Column>
        <Image
          className="left_img"
          src="http://microbrewr.com/wp-content/uploads/2014/11/21st-amendment-logo.jpg"
        />
      </Grid.Column>
      <Grid.Column>
        <Image
          className="mid_top"
          src="https://cdn.craftbeer.com/wp-content/uploads/2014/09/29185524/Russian-River-Brewing-logo.png"
        />

        <br />
        <Image
          className="mid_bottom"
          src="https://d1ynl4hb5mx7r8.cloudfront.net/wp-content/uploads/2017/06/15074406/28986fc61d405d8a72f6.jpeg"
        />
      </Grid.Column>
      <Grid.Column>
        <Image
          className="right_img"
          src="https://images2.porchdrinking.com/2018/02/LagunitasCCBW2.jpg"
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Layout;
