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
    this.handleChange = this.handleChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(e) {
    const newKeyword = e.target.value;
    this.setState({
      keyword: newKeyword
    });
  }

  onSearch() {
    const keyword = this.state.keyword;
    this.props.handleSearch(keyword);
    this.setState({
      keyword: ''
    });
  }

  handleKeyPress(e) {
    if(e.key == 'Enter') {
      this.onSearch();
    }
  }

  getUrl(keyword) {
    let url = '/search/result?keyword=';
    url += keyword;
    return url;
  }

  render() {
    const { isResult } = this.props;
    const { keyword } = this.state;
    let areaClassName = classnames(styles.area_search, isResult && styles.has_result);

    return (
      <div className={areaClassName}>
        <div className={styles.box_input}>
          <input 
            type="text" 
            className={styles.control_input} 
            placeholder="검색어를 입력해주세요." 
            value={keyword} 
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
             />
        </div>
        <button type="button" className={styles.button_search} onClick={this.onSearch} >검색</button>
      </div>
    );
  }
}

export default SearchInput;