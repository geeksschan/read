import React, { Component } from 'react';
import '@babel/polyfill';
import { fetchCall } from '../../utils/ajax';

import Article from '../common/Article';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      articles: []
    }
  }

  async componentDidMount() {
    let result = await fetchCall('/items');
    this.setState({
      isLoaded: true,
      articles: result.response
    });
  }

  render() {
    const { articles, isLoaded } = this.state;
    return (
      <section>
        {isLoaded && (
          articles.map((article) => {
            return <Article article={article} key={article.id} />
          })
        )}
        {isLoaded ? (<span>loaded</span>) : (<span>loading</span>)}
      </section>
    );
  }
}

export default HomePage;