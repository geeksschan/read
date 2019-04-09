import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import { isEmpty } from '../../utils/tool';
import queryString from 'query-string';
import { fetchCall } from '../../utils/ajax';

import SearchInput from './SearchInput';
import SearchResult from './SearchResult';

import styles from './SearchPage.scss';

class SearchPage extends Component {

  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      isLoaded: false,
      keyword: '',
      articles: []
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.initState = this.initState.bind(this);
    this.getArticles = this.getArticles.bind(this);
  }

  async componentDidMount() {
    const keyword = queryString.parse(this.props.location.search).keyword;
    if(keyword) {
      let result = await fetchCall('/result');
      this.setState({
        keyword: keyword,
        isLoaded: true,
        articles: result.response
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const isResult = this.props.location.pathname.indexOf('/result') !== -1 ? true : false;
    if(!isResult && prevState.articles.length !== 0) {
      this.setState({
        isLoaded: false,
        keyword: '',
        articles: []
      });
    }
    return null;
    
  }

  handleSearch(Newkeyword) {
    this.setState({
      isLoaded: false,
      keyword: Newkeyword
    });
    this.getArticles(Newkeyword);
    this.props.history.push("/search/result?keyword="+Newkeyword);
  }

  initState() {
    this.setState({
      isLoaded: false,
      keyword: ''
    });
  }

  async getArticles(keyword) {
    let result = await fetchCall('/result');
    this.setState({
      isLoaded: true,
      articles: result.response
    });
  }

  render() {
    const { location, match } = this.props;
    const { isLoaded, articles, keyword } = this.state;
    const isResult = this.props.location.pathname.indexOf('/result') !== -1 ? true : false;
    
    return (
      <section>
        <SearchInput isResult={isResult} handleSearch={this.handleSearch} />
        {isLoaded && <SearchResult articles={articles} keyword={keyword} /> }
      </section>
    );
  }
}

export default SearchPage;