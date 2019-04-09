import React, { Component } from 'react';

import Header from './Header';
import Aside from './Aside';
import Jumbotron from './Jumbotron';
import NavFilter from './NavFilter';
class BaseLayout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    }
    this.handleExpanded = this.handleExpanded.bind(this);
    this.isJumbotron = this.isJumbotron.bind(this);
    this.isFilter = this.isFilter.bind(this);
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

  isFilter(currentPathname) {
    const filterPathnames = ['/'];
    const isFilter = filterPathnames.includes(currentPathname);
    return isFilter;
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
        { this.isFilter(currentPathname) && <NavFilter /> }
        {this.props.children}  
      </div>
    );
  }
}

export default BaseLayout;