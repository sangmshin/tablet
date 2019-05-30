import React from 'react';
import 'styles/index.scss';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';
import { Header } from 'components/Header';

import Home from './Home';
import Bookmark from './Bookmark';

export default () =>
  <div className="App">
    <Router>
      <Header/>
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route path='/bookmarked-hotels' component={Bookmark} />
      </Switch>  
    </Router>
  </div>