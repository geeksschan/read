import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { isEmpty } from '../../utils/tool';
import classnames from 'classnames';

import styles from './SearchInput.scss';

class SearchInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    }
    this.getUrl = this.getUrl.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const keyword = e.target.value;
    this.props.handleChange(keyword);
  }

  getUrl(keyword) {
    let url = '/search/result?keyword=';
    url += keyword;
    return url;
  }

  render() {

    const { keyword, hasArticles, isResult} = this.props;
    let areaClassName = classnames(styles.area_search, isResult && styles.has_result);

    return (
      <div className={areaClassName}>
        <div className={styles.box_input}>
          <input type="text" className={styles.control_input} placeholder="검색어를 입력해주세요." value={keyword} onChange={this.onChange}  />
        </div>
        <Link to={this.getUrl(keyword)} className={styles.button_search}>검색</Link>
      </div>
    );
  }
}

export default SearchInput;