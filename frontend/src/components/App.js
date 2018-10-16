import React, { Component } from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
{/*import HomePage from './HomePage';*/}
import Landing from './LandingPage';
import NavBar from './NavBar';
import '../../static/css/App.css';
import MessageList from "./ChatBot";

import { BrowserRouter as Router, Route, Link, withRouter } from 'react-router-dom';

const DUMMY_DATA = [
  {
    senderId: "perborgen",
    text: "who'll win?"
  },
  {
    senderId: "janedoe",
    text: "who'll win?"
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    tihs.state = {
      messages: DUMMY_DATA
      }
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
              <DataProvider endpoint="/api/lead/"
                  render={data => <Table data={data} />} />
            )}
          />
          <Route
            exact
            path="/lead/chatbot"
            render={props => (
              <Title />
              <MessageList messages={this.state.messages} />
              <SendMessageForm />
            )}
          />
        </div>
     </div>
    )
  }
        </div>
      </div>
    );
  }
}

export default withRouter(App);