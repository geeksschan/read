import React, { Component } from 'react';
import Moment from 'react-moment';
import styles from './Article.scss';

class Article extends Component {
  render() {
    const { article } = this.props;

    return (
      <article className={styles.article}>
        <div className={styles.thumbnail}>
          <img src={article.thumbnail_link} className={styles.image} width="80" height="80" />
        </div>
        <div className={styles.info}>
          <h1 className={styles.title}>{article.title}</h1>
          {/* <p className={styles.desc}>{article.desc}</p> */}
          <span className={styles.username}>by {article.username}</span>
          <div className={styles.meta}>
            <span className={styles.views}>views {article.views}</span>
            <span className={styles.date}>
              <Moment format="YYYY.MM.DD">{article.created}</Moment>
            </span>
          </div>
        </div>
        <div className={styles.area_tags}>
          <span className={styles.tag}></span>
        </div>
      </article>
    );
  }
}

export default Article;