import React, { Component } from 'react';
import queryString from 'query-string';
import { fetchCall } from '../../utils/ajax';
import { isEmpty } from '../../utils/tool';

import ArticleList from '../common/ArticleList';
import Article from '../common/Article';

import styles from './SearchResult.scss';

class SearchResult extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {

    const { articles, keyword } = this.props;
    console.log('keyword: ' + keyword);
    return (
      <div className={styles.area_result}>
        {articles.map((article) => {
          return <ArticleList 
            articles={article.articles} 
            key={article.id}
            category={keyword} />
        })}
      </div>
    );
  }
}

export default SearchResult;