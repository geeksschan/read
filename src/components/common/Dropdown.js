import React, { Component } from 'react';

class Dropdown extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Dropdown;