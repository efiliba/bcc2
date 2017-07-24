import React, { Component } from 'react';
import './App.css';
import { Grid } from 'react-bootstrap';
import { Header } from './common/Header';
import { Footer } from './common/Footer';
import { HomeContainer } from './home/HomeContainer';
import { BrowserRouter, Route } from 'react-router-dom';

const AgedCare = props => <h1>AgedCare Page<br />Under Construction</h1>;

class App extends Component {
  render() {
    return (
      <Grid fluid className="app">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/home" component={HomeContainer} />
            <Route exact path="/aged-care" component={AgedCare} />
            <Route exact path="/disability-care" render={() => <h1>Disability Support Page<br />Under Construction</h1>} />
            <Route exact path="/private-home-care" render={() => <h1>Private Home Care Page<br />Under Construction</h1>} />
            <Route exact path="/our-services" render={() => <h1>Our Services Page<br />Under Construction</h1>} />
            <Route exact path="/get-started" render={() => <h1>Get Started Page<br />Under Construction</h1>} />
            <Route exact path="/about-us" render={() => <h1>About Us Page<br />Under Construction</h1>} />
            <Route exact path="/24-hour-care" render={() => <h1>24-Hour Care Page<br />Under Construction</h1>} />
            <Route exact path="/mental-stimulation" render={() => <h1>Mental Stimulation Page<br />Under Construction</h1>} />
            <Route exact path="/social-support" render={() => <h1>Social Support Page<br />Under Construction</h1>} />
            <Route exact path="/qualified-care" render={() => <h1>Qualified Care Page<br />Under Construction</h1>} />
            <Route exact path="/consistent-rosters" render={() => <h1>Consistent Rosters Page<br />Under Construction</h1>} />
            <Route exact path="/respite" render={() => <h1>Respite Page<br />Under Construction</h1>} />
            <Route exact path="/help-at-home" render={() => <h1>Help At Home Page<br />Under Construction</h1>} />
            <Route exact path="/medication-reminder" render={() => <h1>Medication Reminders Page<br />Under Construction</h1>} />
            <Footer />
          </div>
        </BrowserRouter>
      </Grid>
    );
  }
}

export default App;
