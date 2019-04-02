import React, { Component } from 'react';
import '@babel/polyfill';
import { fetchCall } from '../../utils/ajax';

import ArticleList from '../common/ArticleList';
import Article from '../common/Article';

import styles from './HomePage.scss';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      articles: []
    }
  }

  async componentDidMount() {
    let result = await fetchCall('/items');
    this.setState({
      isLoaded: true,
      articles: result.response
    });
  }

  render() {
    const { articles, isLoaded } = this.state;
    
    return (
      <section>
        {isLoaded && (
          <div className={styles.area_article}>
          {articles.map((article) => {
            console.log(article.category);
            return <ArticleList 
              articles={article.articles} 
              key={article.id}
              category={article.category} />
          })}
          </div>          
        )}
        {isLoaded ? (<span>loaded</span>) : (<span>loading</span>)}
      </section>
    );
  }
}

export default HomePage;