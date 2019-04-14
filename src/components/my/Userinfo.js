import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

import styles from './UserInfo.scss';

class Userinfo extends Component {
  render() {
    const { isEdit, userinfo : {username, desc, thumbnailUrl } } = this.props;

    return (
      <div className={styles.area_userinfo}>
        <div className={styles.info}>
          <div className={styles.thumbnail}>
            <img className={styles.image} src={thumbnailUrl} width="80" height="80" />
          </div>
          <strong className={styles.name}>{ username }</strong>
          <p className={styles.desc}>{ ReactHtmlParser(desc) }</p>
          {!isEdit && <Link to="/my/edit/profile" className={styles.link_profile}>프로필 설정</Link> }
        </div>
      </div>
    );
  }
}

export default Userinfo;