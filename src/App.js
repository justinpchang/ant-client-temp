import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import Profile from './components/Profile';
import Landing from './components/Landing';
import ProjectSearch from './components/ProjectSearch';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/project_search" component={ProjectSearch} />
      </Switch>
    </Router>
  );
}

export default App;
