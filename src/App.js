import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { history } from './history';
import './styles/index.scss';

import Question1 from './pages/Question1';
import Question2 from 'pages/Question2';

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/' component={Question1} />
        <Route path='/question2' component={Question2} />
      </Switch>
    </Router>
  );
}

export default App;
