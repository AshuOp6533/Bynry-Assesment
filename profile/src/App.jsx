import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';
import ProfileDetails from './components/ProfileDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/admin" component={Admin} />
        <Route path="/profile/:id" component={ProfileDetails} />
      </Switch>
    </Router>
  );
};

export default App;
