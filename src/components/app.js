import React, { Component } from 'react';
import moment from "moment";
import PortfolioContainer from './portfolio/portfolio-container';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Nicholaas Miller</h1>
        <h2>React Portfolio</h2>
        <PortfolioContainer/>
        <div>
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
      </div>
      </div>
    );
  }
}
