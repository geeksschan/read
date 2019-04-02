import React, { Component } from 'react';
import SearchInput from './SearchInput';

import styles from './SearchPage.scss';

class SearchPage extends Component {
  render() {
    return (
      <section>
        <SearchInput />
      </section>
    );
  }
}

export default SearchPage;