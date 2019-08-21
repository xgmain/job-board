import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './common/Header';
import Footer from './common/Footer';
import ListJobs from './components/ListJobs';
import JobDetail from './components/JobDetail';
import CreateJob from './components/CreateJob';

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <div>
          <Switch>
              <Route exact path='/' component={ListJobs} />
              <Route path='/detail/:id' component={JobDetail} />
              <Route path='/create' component={CreateJob} />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;