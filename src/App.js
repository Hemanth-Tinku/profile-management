import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ProfileForm from './pages/ProfileForm';
import Profile from './pages/Profile';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/profile-form" component={ProfileForm} />
        <Route path="/profile" component={Profile} />
        <Route path="/404" component={PageNotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
