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
    this.handleChange = this.handleChange.bind(this);
    this.hasArticles = this.hasArticles.bind(this);
    this.isResult = this.isResult.bind(this);
  }

  componentDidMount() {}

  handleChange(keyword) {
    this.setState({
      keyword: keyword,
    });
  }

  hasArticles() {
    if(this.state.articles.length !== 0) return true;
    return false;
  }

  isResult(pathname) {
    if(pathname.indexOf('/result') !== -1) {
      return true
    }
    return false;
  }

  render() {
    const { location, match } = this.props;
    
    return (
      <section>
        <Route path={`${match.path}`} render={(props) => {
          return <SearchInput keyword={this.state.keyword} handleChange={this.handleChange} hasArticles={this.hasArticles()} isResult={this.isResult(location.pathname)} />
        }}/>
        <Route exact path={`${match.path}/result`} render={(props)=>{
          return <SearchResult {...props} />
        }} />
      </section>
    );
  }
}

export default SearchPage;