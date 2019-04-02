import React, { Component } from 'react';
import styles from './SearchInput.scss';

class SearchInput extends Component {
  render() {
    return (
      <div className={styles.area_search}>
        <div className={styles.box_input}>
          <input className={styles.control_input} placeholder="검색어를 입력해주세요." />
        </div>
        <button className={styles.button_search}>검색</button>
      </div>
    );
  }
}

export default SearchInput;