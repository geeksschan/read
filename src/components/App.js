import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { withRouter} from 'react-router';

import BaseLayout from './common/BaseLayout';
import HomePage from './home/HomePage';
import SearchPage from './search/SearchPage';
import PostPage from './post/PostPage';
import MyPage from './my/MyPage';
import ErrorPage from './error/ErrorPage';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <Router>
        <Switch>
          <Route render={(props)=>{
            return (
              <BaseLayout {...props}>
                <Route exact path="/" component={HomePage} />
                <Route exact path={["/search", "/search/result"]} component={SearchPage} />
                <Route exact path={["/post", "/post/:id", "/post/edit/:id"]} component={PostPage} />
                <Route exact path={["/my", "/my/edit/profile", "my/edit/password", "/my/edit/out"]} render={(props) => {
                  const { location: {pathname} } = props;
                  const isEdit = pathname.indexOf('/edit') !== -1 ? true 
                  : false;
                  let type = null;
                  if(isEdit) {
                    if(pathname.indexOf('/profile') !== -1) {
                      type = 'profile';
                    } else if(pathname.indexOf('/password')) {
                      type = 'password';
                    } else if(pathname.indexOf('/out')) {
                      type = 'out'
                    }
                  }
                  return <MyPage isEdit={isEdit} typeEdit={type} />
                }} />
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