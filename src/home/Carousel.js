import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';

class BootstrapCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();

    this.handleSelect = this.handleSelect.bind(this);
  }

  getInitialState() {
    return {
      index: 0,
      direction: null
    };
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction
    });
  }

  render() {
    return (
      <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
        {
          this.props.slides.map((slide, index) =>
            <Carousel.Item key={`slide${index}`}>
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
}

export { BootstrapCarousel as Carousel };