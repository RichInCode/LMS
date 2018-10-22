import React, { Component } from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
{/*import HomePage from './HomePage';*/}
import Landing from './LandingPage';
import NavBar from './NavBar';
import '../../static/css/App.css';
import SimpleForm from './SimpleForm';
import EditTable from './EditTable';

import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';

const steps = [
  {
    id: '0',
    message: 'Welcome to react chatbot!',
    trigger: '1',
  },
  {
    id: '1',
    message: 'Bye!',
    end: true,
  },
]


const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "who'll win?"
  },
  {
    senderId: "janedoe",
    text: "Brazil!"
  }
]

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
          <Route
            exact
            path="/lead/entry"
            render={props => (
              <Form endpoint="/api/lead/"/>
            )}
          />
          <Route
            exact
            path="/lead/view"
            render={props => (
              <DataProvider endpoint="/api/lead/" location={props.location}
                  render={data => <Table data={data} />} />
            )}
          />
          <Route
            exact
            path="/lead/chatbot"
            component={SimpleForm}
          />
          <Route
            path="/lead/manage"
            render={props => (
              <DataProvider endpoint="/api/search/" location={props.location}
                render={data => <EditTable data={data} />} />
            )}
          />
        </div>
     </div>
    );
  }
}

export default withRouter(App);