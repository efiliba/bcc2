import React, { Component } from 'react';
import './App.css';
import { Grid } from 'react-bootstrap';
import { Header } from './common/Header';
import { Footer } from './common/Footer';
import { HomeContainer } from './home/HomeContainer';

class App extends Component {
  render() {
    return (
      <Grid fluid className="app">
        <Header />
        <HomeContainer /> 
        <Footer />
      </Grid>
    );
  }
}

export default App;
