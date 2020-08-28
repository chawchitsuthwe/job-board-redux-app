import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import JobDetail from './components/JobDetail';
import Result from './components/Result';

const App = () => {
  return (
  <div className="App">
    <Nav />
    <Router>
      <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/result/:keyword" component={Result}/>
            <Route exact path="/job" component={JobDetail}/>
          </Switch>
    </Router>
    <Footer />
  </div>
);
}

export default App;
