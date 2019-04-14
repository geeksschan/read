import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import classnames from 'classnames';
import { convertBrToLinkbreak, convertLineBreakToBr } from '../../utils/tool';

import styles from './EditProfile.scss';

class EditProfile extends Component {

  constructor(props) {
    super(props);
    this.fileRef = React.createRef();
    this.onChange = this.onChange.bind(this);
    this.onChangeDesc = this.onChangeDesc.bind(this);
    this.handleClickFileButton = this.handleClickFileButton.bind(this);
    this.handleChangeFile = this.handleChangeFile.bind(this);
  }

  onChange(e) {
    const target = e.target;
    const username = target.value;
    this.props.handleChange(username);
  }

  onChangeDesc(e) {
    const target = e.target;
    const desc = convertLineBreakToBr(target.value);
    this.props.handleChangeDesc(desc);
  }

  handleChangeFile(fileList) {
    // file 변경에 따른 작업 진행
  }

  handleClickFileButton() {
    this.fileRef.current.click();
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
              <textarea 
                className={classnames(styles.input_control, styles.type_textarea)}
                value={convertBrToLinkbreak(desc)}
                placeholder="간단한 자기소개 부탁해요."
                onChange={this.onChangeDesc} />
            </label>
          </div>
          <div className={styles.input_group}>
            <label className={styles.label}>
              <span className={styles.label_text}>프로필 이미지</span>
              <button 
                type="button"
                className={styles.button_file}
                onClick={this.handleClickFileButton}>파일선택</button>
              <input
                type="file"
                className={classnames(styles.input_control, styles.type_file)}
                ref={this.fileRef}
                onChange={this.handleChangeFile} />
            </label>
          </div>
          <div className={styles.input_group}>
            <label className={styles.label}>
              <span className={styles.label_text}>계정 설정</span>
              <div className={styles.button_group}>
                <Link to="/my/edit/password" className={styles.link_password}>비밀번호 변경</Link>
                <Link to="/my/edit/out" className={styles.link_out} >탈퇴</Link>
              </div>
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

export default EditProfile;