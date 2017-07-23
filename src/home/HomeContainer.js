import React from 'react';
import './HomeContainer.css';
import { Row, Col } from 'react-bootstrap';
import { Carousel } from './Carousel';
import { Tiles } from './Tiles';
import { Paralax } from './Paralax';
import { News } from './News';

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

const articles = [{
  image: {
    source: "HALf-of-austr-335x204.png",
    text: "Half of older Australians live with disabilities"
  },
  heading: "Findings Show Half Of Older Australians Live With Disabilities",
  description: "ABS: 50.7% of Australians 65 Years+ Are Living With Disability Findings from the Australian Bureau of Statistics have discovered a rise in reported cases of seniors living with disability in Australia. Released on the 29th of April 2016, the media release from the Australian Bureau of Statistics shows a rise in the number of Australians aged 65 years and older that have […]"
}, {
  image: {
    source: "home-care-or-nursing-home-335x204.png",
    text: "Home Care vs. Nursing Care"
  },
  heading: "What Makes People Choose In-Home Care?",
  description: "What Makes Many Australians Choose Home Care Instead Of Nursing Home Services For many individuals and families that are tasked with considering a solution to provide support for their loved one, the choice between an assisted living facility (or nursing home) versus in-home care can present itself as a crossroad. Both have their perks, but […]"
}, {
  image: {
    source: "in-home-respite-care-335x204.png",
    text: "In-Home Respite Care"
  },
  heading: "How Respite Care Can Work For You",
  description: "How Respite Care Can Work In Your Home Respite care is an extremely invaluable service for many individuals and families who receive regular home care. Respite care works as a mediator. It lets your regular caregiver take an often much-needed break or temporary period of rest, so that they may continue to uphold the standard […]"
}, {
  image: {
    source: "Live-In-Home-Care-335x204.png",
    text: "Live-In Home Care"
  },
  heading: "Learning About Live-In Care",
  description: "Live-In Home Care For Elderly and Disabled Individuals and Families   Live-In Care provides the ability to live safely in your own home. You or your loved one can continue to live in their own environment, where they are comfortable and have their own independence. Many prefer to pursue live-in care as an alternative to being […]"
}, {
  image: {
    source: "Home-care-for-domestic-couples-1-335x204.png",
    text: "Home Care for Couples"
  },
  heading: "Home Care for Couples",
  description: "Elderly and Disability Home Care For Couples   At-home care for couples is a perfect solution for ensuring that live-in-couples or those in spousal relationships can continue to live together safely–while still maintaining all the freedom that comes with continuing to live in their own home.   Care for couples is delivered in a wide variety […]"
}, {
  image: {
    source: "templatee-3-335x204.png",
    text: "Knowing When It’s Time To Consider Home Care"
  },
  heading: "Knowing When It’s Time To Consider Home Care",
  description: "How Can You Tell When Home Care Is Necessary? The first step to receiving care at your home is the realisation that you or a loved one may benefit from it. It can be difficult feeling like you need care or assistance, or to accept that a loved one might, but as we age we […]"
}];

export const HomeContainer = props => 
  <div className="home-container">
    <Carousel slides={slides} />
    <Tiles tiles={tiles} />
    <Paralax />
    <News articles={articles} />
  </div>;