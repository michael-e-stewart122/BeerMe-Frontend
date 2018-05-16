import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: 'https://s.hdnux.com/photos/66/64/75/14372727/3/920x920.jpg',
    altText: 'Beers',
    caption: 'Beers'
  },
  {
    src:
      'https://cdn.vox-cdn.com/thumbor/68Fxd5dPE3Uxa4mVbpR139OBSM4=/0x0:2000x1333/1200x0/filters:focal(0x0:2000x1333)/cdn.vox-cdn.com/uploads/chorus_asset/file/10810239/SFBrewingCo_PChang_5929.jpg',
    altText: 'Breweries',
    caption: 'Breweries'
  },
  {
    src:
      'https://cdn.vox-cdn.com/thumbor/8TjOlmuJ-JDqU-Y4D1TGFpFe5Pw=/42x0:711x502/1200x900/filters:focal(42x0:711x502)/cdn.vox-cdn.com/uploads/chorus_image/image/51980545/Lagunitas-Brewing-Co.-753-Wide-Tour-2016-m.woolsey1.0.0.jpeg',
    altText: 'Friends',
    caption: 'Friends'
  }
];

class SlideShow extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}>
          <img src={item.src} alt={item.altText} width="100%" height="100%" />
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}>
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={this.previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={this.next}
        />
      </Carousel>
    );
  }
}

export default SlideShow;
