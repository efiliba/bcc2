import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

const BootstrapCarousel = React.createClass({
  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  },

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  },

  render() {
    return (
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
        {
          this.props.slides.map(slide =>
            <Carousel.Item>
              <img
                className="carosel-image"
                src={`../images/${slide.image.source}`}
                alt={slide.image.alternate}
              />
              <Carousel.Caption>
                {slide.caption && slide.caption.heading}
                {slide.caption && slide.caption.anchor &&
                  <a href={slide.caption.anchor.link}>{slide.caption.anchor.text}</a>
                }
              </Carousel.Caption>
            </Carousel.Item>
          )
        }
      </Carousel>
    );
  }
});

export { BootstrapCarousel as Carousel };