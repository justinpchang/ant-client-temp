import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './components/Home';
import Profile from './components/Profile';
import Landing from './components/Landing';
import Login from './components/Login';
import ProjectSearch from './components/ProjectSearch';
import Messaging from './components/Messaging';
import UserOnboarding from './components/UserOnboarding';
import BusinessOnboarding from './components/BusinessOnboarding';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/project-search" component={ProjectSearch} />
        <Route exact path="/messaging" component={Messaging} />
        <Route exact path="/user-onboarding" component={UserOnboarding} />
        <Route exact path="/business-onboarding" component={BusinessOnboarding} />
      </Switch>
    </Router>
  );
}

export default App;
