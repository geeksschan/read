import React, { Component } from 'react';

import styles from './PostEdit.scss';

class PostEdit extends Component {
  render() {
    return (
      <div>
        <form className={styles.form}>
          <div className={styles.input_group}>
            <label className={styles.label}>
              <span className={styles.label_text}>제목 </span>
              <input type="text" className={styles.input_control} placeholder="제목을 입력해주세요." />
            </label>
          </div>
          <div className={styles.input_group}>
            <label className={styles.label}>
              <span className={styles.label_text}>URL</span>
              <input type="text" className={styles.input_control} placeholder="공유하는 URL을 입력해주세요." />
            </label>
          </div>
          <div className={styles.input_group}>
            <label className={styles.label}>
              <span className={styles.label_text}>태그</span>
              <input type="text" className={styles.input_control} placeholder="태그를 입력해주세요. (예> html,css)" />
            </label>
          </div>
          <div className={styles.button_group}>
            <button type="submit" className={styles.button_submit}>확인</button>
            <button type="button" className={styles.button_cancel}>취소</button>
          </div>
        </form>
      </div>
    );
  }
}

export default PostEdit;