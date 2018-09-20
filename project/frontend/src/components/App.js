import React, { Component } from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
{/*import HomePage from './HomePage';*/}
import Landing from './LandingPage';
import NavBar from './NavBar';
import '../../static/css/App.css';

import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    }
  render() {
    return (
      <div>
        <div className="App">
          <Route
            exact
            path="/"
            render={props => (
              <Landing
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(App);