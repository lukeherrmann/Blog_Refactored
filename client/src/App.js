import React, { Fragment } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './components/Home';
import FetchBlogs from './components/FetchBlogs'
import NoMatch from "./components/NoMatch"
import Navbar from "./components/Navbar"



const App = () => (
  <Fragment>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/blogs" component={FetchBlogs} />
      <Route component={NoMatch} />
    </Switch>
  </Fragment>
);

export default App;