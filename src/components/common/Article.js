import React, { Component } from 'react';
import styles from './Article.scss';

class Article extends Component {
  render() {
    const { article } = this.props;

    return (
      <article>
        <div className={styles.thumbnail}>
          <img className={styles.image} />
        </div>
        <h1 className={styles.title}>{article.title}</h1>
        <p className={styles.desc}>{article.desc}</p>
        <span className={styles.date}>{article.created}</span>
        <span className={styles.username}></span>
        <div className={styles.area_tags}>
          <span className={styles.tag}></span>
        </div>
      </article>
    );
  }
}

export default Article;