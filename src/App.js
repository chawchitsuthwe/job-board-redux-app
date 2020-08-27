import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './components/Nav';
import Home from './components/Home';

const App = () => {
  return (
  <div className="App">
    <Nav />
    <Router>
      <Switch>
              <Route exact path="/" component={Home}/>
          </Switch>
    </Router>
  </div>
);
}

export default App;
