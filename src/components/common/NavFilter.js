import React, { Component } from 'react';

import style from './NavFilter.scss';

class NavFilter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectName: this.props.filterList[0]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log('did navfilter');
  }

  handleClick(e) {
    e.preventDefault();
    
    this.setState({
      selectName: e.target.text
    });
  }

  render() {

    const { filterList } = this.props;

    return (
      <nav className={style.nav}>
        <ul className={style.list_nav}>
        { filterList.map((value) => 
          <li className={style.item_nav}
              aria-selected={this.state.selectName === value} 
              key={value} >
            <a href="/" className={style.link} onClick={this.handleClick}>{value}</a>
          </li>
        )}
        </ul>
      </nav>
    );
  }
}

export default NavFilter;