import React, {Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import CAll from './components/CAll';
import CDash from './components/CDash';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
    <div>
      <div className="content">
        <CAll/>
        <Router>
        <Switch>
          <Route exact path={"/customer-dashboard"} component={CDash}/>
        </Switch>
        </Router>
      </div>
    </div>
  );}
}

export default App;
