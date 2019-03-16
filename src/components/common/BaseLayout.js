import React, { Component } from 'react';

import Header from './Header';
import Jumbotron from './Jumbotron';
import NavFilter from './NavFilter';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <NavFilter />
        {this.props.children}  
      </div>
    );
  }
}

export default BaseLayout;