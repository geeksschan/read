import React, { Component } from 'react';
import Article from './Article';
import moment from 'moment';
import styles from './ArticleList.scss';
class ArticleList extends Component {
  
  constructor(props) {
    super(props);
    this.getTitle = this.getTitle.bind(this);
  }

  getTitle(category) {
    let title = moment(category).format('YYYY.MM.DD');
    if(title == moment().format('YYYY.MM.DD')) {
      title = '오늘';
    }
    return title;
  }
    
  render() {
    const { articles, category } = this.props;

    return (
      <div className={styles.area_article}>
        <strong className={styles.title}>{this.getTitle(category)}</strong>
        <ul className={styles.list_article}>
        { articles.map((article) => {
          return (<li className={styles.item_article} key={article.id}>
            <a>
              <Article article={article} />   
            </a>
          </li> 
        )})}
        </ul>
      </div>
    );
  }
}

export default ArticleList;