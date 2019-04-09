import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import style from './Aside.scss';

const DEMO_PROPS = {
  isLogin: true,
  username: 'geeksschan',
  thumbnailUrl: 'http://cfile201.uf.daum.net/R400x0/2601F24351134D061AB2CB'
};
class Aside extends Component {

  constructor(props) {
    super(props);
    this.onClickDimmed = this.onClickDimmed.bind(this);
  }

  componentDidMount() {}

  onClickDimmed(e) {
    this.props.handleExpanded(this.props.isExpanded);
  }

  render() {

    const { isExpanded } = this.props;
    const {isLogin, username, thumbnailUrl} = DEMO_PROPS;

    return (
      <div className={style.aside} aria-hidden={!isExpanded}>
        <div className={style.dimmed} onClick={this.onClickDimmed}></div>
        <div className={style.inner}>
          <div className={style.userinfo}>
            <div className={style.thumbnail}>
              <img className={style.image} src={thumbnailUrl} width="70" height="70" />
            </div>
            <strong className={style.username}>geeksschan</strong>
          </div>
          <nav className={style.nav}>
            <ul className={style.list_nav}>
              <li className={style.item_nav}>
                <Link to="/search" onClick={this.onClickDimmed} className={style.link}>검색</Link>
              </li>
              <li className={style.item_nav}>
                <a className={style.link}>글쓰기</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Aside;