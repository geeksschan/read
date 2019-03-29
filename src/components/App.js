import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter} from 'react-router';

import BaseLayout from './common/BaseLayout';
import HomePage from './home/HomePage';
import SearchPage from './search/SearchPage';
import ErrorPage from './error/ErrorPage';


class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log(this.props);

    return (
      <Router>
        <Switch>
          <Route render={(props)=>{
            return (
              <BaseLayout {...props}>
                <Route exact path="/" component={HomePage} />
                <Route path="/search" component={SearchPage} />
                <Route path="/error" component={ErrorPage} />
              </BaseLayout>
            )
          }}/>
        </Switch>
      </Router>
    );
  }
}

export default App;