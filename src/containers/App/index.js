import React from 'react';
import './style.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'containers/Home';
import Login from 'containers/Login';
import Register from 'containers/Register';

function App() {
  return (
    <main className="App">      
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
