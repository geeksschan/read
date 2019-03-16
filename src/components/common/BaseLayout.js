import React, { Component } from 'react';

import Header from './Header';
import Jumbotron from './Jumbotron';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        {this.props.children}  
      </div>
    );
  }
}

export default BaseLayout;