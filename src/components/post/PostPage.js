import React, { Component } from 'react';
import { isEmpty } from '../../utils/tool';
import PostEdit from './PostEdit';

import styles from './PostPage.scss';


class PostPage extends Component {

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {}

  render() {

    const { location, match } = this.props;
    const isNew = !isEmpty(match.params);
    let title = isNew ? '새 글작성' : '수정하기';

    return (
      <section className={styles.section_post}>
        <h2 className={styles.title}>{title}</h2>
        <PostEdit />
      </section>
    );
  }
}

export default PostPage;