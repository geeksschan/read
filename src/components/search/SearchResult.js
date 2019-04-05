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

  async componentDidMount() {
    console.log('did result');
    const hasKeyword = isEmpty(queryString.parse(this.props.location.search));
    if(hasKeyword) {
      let result = await fetchCall('/result');
      this.setState({
        hasKeyword: true,
        isLoaded: true,
        articles: result.response
      });
    }
  }

  render() {
    return (
      <div className={styles.area_result}>
        {/* {articles.map((article) => {
          return <ArticleList 
            articles={article.articles} 
            key={article.id}
            category={article.category} />
        })} */}
      </div>
    );
  }
}

export default SearchResult;