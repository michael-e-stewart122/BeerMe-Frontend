import React, { Component } from 'react';

import { Carousel } from 'react-responsive-carousel';

class Slideshow extends Component {
  render() {
    return (
      <Carousel
        centered
        showStatus={false}
        autoPlay
        infiniteLoop={true}
        stopOnHover={true}>
        <div>
          <img src="http://longislandadventures.com/wp-content/uploads/Beer-Distributors-Long-Island-Brewery-Tours.jpg" />
        </div>
        <div>
          <img src="http://longislandadventures.com/wp-content/uploads/Beer-Distributors-Long-Island-Brewery-Tours.jpg" />
        </div>
        <div>
          <img src="http://longislandadventures.com/wp-content/uploads/Beer-Distributors-Long-Island-Brewery-Tours.jpg" />
        </div>
      </Carousel>
    );
  }
}

export default Slideshow;
