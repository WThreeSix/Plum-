import React, { Component,Fragment } from 'react';
import {BrowserRouter as Router} from 'react-router-dom' ; 
import Home from './pages/home'
import './style/usage/app.scss'
import "./style/usage/core/reset.scss"
import "./App.css"
// import {Provider} from "react-redux"
// import store from "./store"
// console.log(Provider)
// console.log(store)
class App extends Component {
  render() {
    return (
    	// <Provider store={store}>
	        <Router>
		       <Fragment>
		      	  <Home></Home>
		       </Fragment>  
	        </Router>
        // </Provider>
    );
  }
}

export default App;



     