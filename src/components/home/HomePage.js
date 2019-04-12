import React, { Component } from 'react';
import { fetchCall } from '../../utils/ajax';

import NavFilter from '../common/NavFilter';
import ArticleList from '../common/ArticleList';
import Article from '../common/Article';
import moment from 'moment';
import styles from './HomePage.scss';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      articles: []
    };
    this.getTitle = this.getTitle.bind(this);
  }

  async componentDidMount() {
    let result = await fetchCall('/items');
    this.setState({
      isLoaded: true,
      articles: result.response
    });
  }

  getTitle(category) {
    let title = moment(category).format('YYYY.MM.DD');
    if(title == moment().format('YYYY.MM.DD')) {
      title = '오늘';
    }
    return title;
  }

  render() {
    const { articles, isLoaded } = this.state;
    
    return (
      <section>
        <NavFilter filterList={['최신','인기']} />
        {isLoaded && (
          <div className={styles.area_article}>
          {articles.map((article) => {
            return <ArticleList 
              articles={article.articles} 
              key={article.id}
              category={this.getTitle(article.category)} />
          })}
          </div>          
        )}
        {isLoaded ? (<span>loaded</span>) : (<span>loading</span>)}
      </section>
    );
  }
}

export default HomePage;