import React, { Component } from 'react';
import moment from 'moment';
import { fetchCall } from '../../utils/ajax';

import Userinfo from './Userinfo';
import NavFilter from '../common/NavFilter';
import ArticleList from '../common/ArticleList';
import Article from '../common/Article';
import ProfileEdit from './ProfileEdit';

import styles from './MyPage.scss';

const DEMO_PROPS = {
  isLogin: true,
  username: 'geeksschan',
  desc: '개발을 좋아하는 개발자,<br/> 주짓수를 사랑하는 개발자,<br/> 결론은 운동중독자',
  thumbnailUrl: 'http://cfile201.uf.daum.net/R400x0/2601F24351134D061AB2CB'
};

class MyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      articles: [],
      userinfo: {
        username: DEMO_PROPS.username,
        desc: DEMO_PROPS.desc,
        thumbnailUrl: DEMO_PROPS.thumbnailUrl
      }
    };

    this.getTitle = this.getTitle.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
  
  handleChange(value) {
    console.log(value);
    this.setState((prevState) => {
      return {
        userinfo : Object.assign({}, prevState.userinfo, { username : value })
      }
    });
  }

  render() {
    const { isEdit } = this.props;
    const { articles, isLoaded, userinfo } = this.state;
    
    return (
      <section>
        <Userinfo isEdit={isEdit} userinfo={userinfo} />
        {!isEdit && (
          <>
          <NavFilter filterList={['내가쓴글', '내가좋아하는글']} />
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
          </>
        )}
        {isEdit && (
          <div className={styles.area_edit}>
            <h2 className={styles.title}>프로필 설정</h2>
            <ProfileEdit userinfo={userinfo} handleChange={this.handleChange} />
          </div>
        )}
      </section>
    );
  }
}

export default MyPage;