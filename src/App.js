import React, { Component } from 'react';
import Home from './pages/home';
import Login from './pages/login';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './style/usage/app.scss';
import {Provider} from 'react-redux';
import store from './store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
              <Route path="/home"  component={Home}/>
              <Route path="/login" component={Login}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
