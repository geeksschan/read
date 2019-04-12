import React, { Component } from 'react';
import styles from './ProfileEdit.scss';

class ProfileEdit extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const target = e.target;
    const username = target.value;
    this.props.handleChange(username);
  }

  render() {

    const { userinfo : {username, desc, thumbnailUrl } } = this.props;

    return (
      <div>
        <form className={styles.form}>
          <div className={styles.input_group}>
            <label className={styles.label}>
              <span className={styles.label_text}>닉네임 </span>
              <input type="text" className={styles.input_control} value={username} placeholder="닉네임을 입력해주세요." onChange={this.onChange} />
            </label>
          </div>
          <div className={styles.input_group}>
            <label className={styles.label}>
              <span className={styles.label_text}>자기소개</span>
              <textarea className={styles.input_control} placeholder="간단한 자기소개 부탁해요." />
            </label>
          </div>
          <div className={styles.input_group}>
            <label className={styles.label}>
              <span className={styles.label_text}>프로필 이미지</span>
              <input type="file" className={styles.input_control} />
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

export default ProfileEdit;