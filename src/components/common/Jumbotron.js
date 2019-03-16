import React, { Component } from 'react';

import style from './Jumbotron.scss';

class Jumbotron extends Component {
  render() {
    return (
      <div className={style.jumbotron}>
        <div className={style.title_group}>
          <strong className={style.title}>개발자들의 컨텐츠 공유 서비스, 이거라도 읽자!</strong>
          <p className={style.desc}>내가 만든 컨텐츠, 나누고 싶은 콘텐츠를 공유해주세요 :D</p>  
        </div>
      </div>
    );
  }
}

export default Jumbotron;