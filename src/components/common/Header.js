import React, { Component } from 'react';

import style from './Header.scss';
import DropdownUser from './DropdownUser';

const DEMO_PROPS = {
  isLogin: true,
  username: 'geeksschan',
  thumbnailUrl: 'http://cfile201.uf.daum.net/R400x0/2601F24351134D061AB2CB'
};

class Header extends Component {
  render() {

    const {isLogin, username, thumbnailUrl} = DEMO_PROPS;

    return (
      <header className={style.header}>
        <div className={style.inner}>
          <a href="/" className={style.link_title}>
            <h1 className={style.title}>읽어라 읽어</h1>
          </a>
          <button type="button" className={style.button_menu} aria-haspopup="true" aria-expanded="false">
            <span className={style.icon_menu}></span>
            <span className="blind">메뉴</span>
          </button>
        </div>
      </header>
    );
  }
}

export default Header;