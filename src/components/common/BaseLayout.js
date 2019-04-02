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
  }

  handleExpanded(isExpanded) {
    this.setState({
      isExpanded: !isExpanded
    });
  }

  render() {
    
    const jumbotronPathnames = ['/'];
    const filterPathnames = ['/'];
    const currentPathname = this.props.location.pathname;

    const isJumbotron = jumbotronPathnames.includes(currentPathname);
    const isFilter = filterPathnames.includes(currentPathname);

    return (
      <div>
        <Header
          isExpanded={this.state.isExpanded}
          handleExpanded={this.handleExpanded} />
        <Aside 
          isExpanded={this.state.isExpanded}
          handleExpanded={this.handleExpanded} />
        { isJumbotron && <Jumbotron /> }
        { isFilter && <NavFilter /> }
        {this.props.children}  
      </div>
    );
  }
}

export default BaseLayout;