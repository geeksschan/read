import React, { Component } from 'react';
import Article from './Article';
import styles from './ArticleList.scss';
class ArticleList extends Component {
  
  constructor(props) {
    super(props);
  }
    
  render() {
    const { articles, category } = this.props;

    return (
      <div className={styles.area_article}>
        <strong className={styles.title}>{category}</strong>
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