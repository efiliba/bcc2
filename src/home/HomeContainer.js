import React from 'react';
import './HomeContainer.css';
import { Row, Col } from 'react-bootstrap';
import { Carousel } from './Carousel';
import { Tiles } from './Tiles';

const slides = [{
  image: {
    source: "Get-To-Know-Us-1400x520.png",
    alternate: "Get to know us"
  }
}, {
  image: {
    source: "slider-2-1400x520.png",
    alternate: "Second slide"
  },
  caption: {
    heading: "Live Safely In Your Own Home"
  }
}, {
  image: {
    source: "disability-slider-2--1400x520.png",
    alternate: "Third slide"
  },
  caption: {
    heading: "Live Comfortably On Your Own Terms"
  }
}, {
  image: {
    source: "newheader-1400x520.png",
    alternate: "Last slide"
  },
  caption: {
    heading: "Affordable, Reliable, Personalised Home Care Services",
    anchor: {
      link: "http://bestchoicecare.com.au/get-started",
      text: "best choice care"
    }
  }
}];

const tiles = [{
  header: {
    icon: "clock-o",
    link: "24-hour-care",
    text: "24-Hour Care"
  },
  description: "We provide as much care as needed to ensure the health and safety of your loved one."
}, {
  header: {
    icon: "pagelines",
    link: "mental-stimulation",
    text: "Mental Stimulation"
  },
  description: "We provide methods for keeping your mind sharp and active with our regular assistance throughout our home care programs."
}, {
  header: {
    icon: "child",
    link: "social-support",
    text: "Social Support"
  },
  description: "We provide friendly companionship and facilitate active social engagement for our clients."
}, {
  header: {
    icon: "check-square-o",
    link: "qualified-care",
    text: "Qualified Care"
  },
  description: "Our carers are monitored, expertly trained and informed of your specific needs before entering your home."
}, {
  header: {
    icon: "calendar-o",
    link: "consistent-rosters",
    text: "Consistent Rosters"
  },
  description: "Get peace of mind by having consistent times for our carers to enter your home when servicing your home care needs."
}, {
  header: {
    icon: "wheelchair",
    link: "respite",
    text: "Respite"
  },
  description: "Our home care assists with rest and relief from physical and mental burdens thanks to the presence of our trained staff."
}, {
  header: {
    icon: "cutlery",
    link: "help-at-home",
    text: "Help At Home"
  },
  description: "Relieve additional burden by letting us help with cleaning, meal preparation and household errands."
}, {
  header: {
    icon: "medkit",
    link: "help-at-home",
    text: "Medication Reminders"
  },
  description: "We take your health seriously and provide enforced reminders to ensure that your medication is never missed."
}];

export const HomeContainer = props => 
  <div className="home-container">
    <Carousel slides={slides} />
    <Tiles tiles={tiles} />
  </div>;