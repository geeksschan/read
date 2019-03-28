import React, { Component } from 'react';

import style from './Header.scss';
import DropdownUser from './DropdownUser';

class Header extends Component {

  constructor(props) {
    super(props);
    this.onClickAsideButton = this.onClickAsideButton.bind(this);
  }

  onClickAsideButton() {
    this.props.handleExpanded(this.props.isExpanded);
  }

  render() {

    const { isExpanded } = this.props;

    return (
      <header className={style.header}>
        <div className={style.inner}>
          <a href="/" className={style.link_title}>
            <h1 className={style.title}>읽어라 읽어</h1>
          </a>
          <button 
            type="button" 
            className={style.button_menu}
            aria-haspopup="true"
            aria-expanded={isExpanded}
            onClick={this.onClickAsideButton} >
            <span className={style.icon_menu}></span>
            <span className="blind">메뉴</span>
          </button>
        </div>
      </header>
    );
  }
}

export default Header;