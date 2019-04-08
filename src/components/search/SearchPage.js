import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { isEmpty } from '../../utils/tool';

import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

import styles from './SearchPage.scss';

class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      keyword: '',
      articles: []
    }
  }

  componentDidMount() {}

  // changeLocation() {
  //   window.location.href = "/search/result?keyword="+this.state.keyword;
  // }

  render() {
    const { location, match } = this.props;
    const { articles } = this.state;
    
    return (
      <section>
        <SearchInput />
        <SearchResult />
      </section>
    );
  }
}

export default SearchPage;