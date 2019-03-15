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
          <div className={style.feature_group}>
            <a href="/" className={style.link_search}>검색</a>
            <a href="/" className={style.link_new_post}><span className={style.icon_new_post}>+</span> 새 글쓰기</a>
            { !isLogin ? (
              <a href="/" className={style.link_login}>로그인</a>
            ) : (
              <DropdownUser username={username} thumbnailUrl={thumbnailUrl} />
            )}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;