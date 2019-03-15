import React, { Component } from 'react';

import style from './DropdownUser.scss';

class DropdownUser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        isExpanded: !prevState.isExpanded
      }
    });
  }

  render() {
    const { username, thumbnailUrl } = this.props;
    const isExpanded = this.state.isExpanded;
    const isHidden = !isExpanded;

    return (
      <div className={style.dropdown}>
        <button 
          type="button" 
          className={style.button_menu} aria-haspopup="true" 
          aria-expanded={isExpanded}
          onClick={this.handleClick} >
          <span className={style.thumbnail}>
            <img src={thumbnailUrl} className={style.image} alt="사용자 프로필 이미지" />
          </span>
        </button>
        <div className={style.menu} aria-hidden={isHidden}>
          <strong className={style.name}>{ username }</strong>
          <ul className={style.list_menu}>
            <li className={style.item_menu}><a className={style.link}>내 페이지</a></li>
            <li className={style.item_menu}><a className={style.link}>나중에 읽기</a></li>
            <li className={style.item_menu}><a className={style.link}>로그 아웃</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default DropdownUser;