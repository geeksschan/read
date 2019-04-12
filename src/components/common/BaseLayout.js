import React, { Component } from 'react';

import Header from './Header';
import Aside from './Aside';
import Jumbotron from './Jumbotron';
class BaseLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    }
    this.handleExpanded = this.handleExpanded.bind(this);
    this.isJumbotron = this.isJumbotron.bind(this);
  }

  componentDidMount() {}

  handleExpanded(isExpanded) {
    this.setState({
      isExpanded: !isExpanded
    });
  }

  isJumbotron(currentPathname) {
    const jumbotronPathnames = ['/'];
    const isJumbotron = jumbotronPathnames.includes(currentPathname);
    return isJumbotron;
  }

  render() {
      
    const currentPathname = this.props.location.pathname;

    return (
      <div>
        <Header
          isExpanded={this.state.isExpanded}
          handleExpanded={this.handleExpanded} />
        <Aside 
          isExpanded={this.state.isExpanded}
          handleExpanded={this.handleExpanded} />
        { this.isJumbotron(currentPathname) && <Jumbotron /> }
        {this.props.children}  
      </div>
    );
  }
}

export default BaseLayout;