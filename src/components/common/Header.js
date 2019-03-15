import React, { Component } from 'react';

import style from './Header.scss';
import Dropdown from './Dropdown';

const DEMO_PROPS = {
  isLogin: true
};

function AuthButton(props) {
  const { isLogin } = props;
  if(isLogin) {
    return (
      <div>
        <button type="button"></button>
        <Dropdown className={style.menu_auth}>

        </Dropdown>
      </div>
    );

  } else {
    return (
      <a href="/" className={style.link_login}>로그인</a>
    );
  }
}

class Header extends Component {
  render() {

    const {isLogin} = DEMO_PROPS;

    return (
      <header className={style.header}>
        <div className={style.inner}>
          <a href="/" className={style.link_title}>
            <h1 className={style.title}>읽어라 읽어</h1>
          </a>
          <div className={style.feature_group}>
            <a href="/" className={style.link_search}>검색</a>
            <a href="/" className={style.link_new_post}><span className={style.icon_new_post}>+</span> 새 글쓰기</a>
            <AuthButton isLogin={isLogin} />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;