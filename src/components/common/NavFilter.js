import React, { Component } from 'react';

import style from './NavFilter.scss';

const navList = [
  {key: 'recent', value:'최신'},
  {key: 'popular', value:'인기'}
];

class NavFilter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectName: '최신'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    
    this.setState({
      selectName: e.target.text
    });
  }

  render() {
    return (
      <nav className={style.nav}>
        <ul className={style.list_nav}>
        { navList.map((obj) => 
          <li className={style.item_nav}
              aria-selected={this.state.selectName === obj.value} 
              key={obj.key} >
            <a href="/" className={style.link} onClick={this.handleClick}>{obj.value}</a>
          </li>
        )}
        </ul>
      </nav>
    );
  }
}

export default NavFilter;