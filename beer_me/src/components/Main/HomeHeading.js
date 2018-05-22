import React, { Component } from 'react';
import Cards from './Cards/Cards';
import Slideshow from './Slideshow/Slideshow';

import { Container, Header, Icon, Image } from 'semantic-ui-react';

class HomeHeading extends Component {
  render() {
    return (
      <div>
        {/* <Header as="h2" icon textAlign="center">
          <Icon name="beer" circular />
          <Header.Content>BeerMe</Header.Content>
        </Header> */}
        <Image src="https://washingtonbeer.com/cms_images/bg-HeadersWorking_500-01.jpg" />
      </div>
    );
  }
}

export default HomeHeading;
