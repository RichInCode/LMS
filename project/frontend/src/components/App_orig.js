import React, { Component } from "react";
import ReactDOM from "react-dom";
import DataProvider from "./DataProvider";
import Table from "./Table";
import Form from "./Form";
import HomePage from './HomePage';

import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

const App = () => (
  <React.Fragment>
    <HomePage endpoint="api/lead" />
    <DataProvider endpoint="api/lead/"
                  render={data => <Table data={data} />} />
    <Form endpoint="api/lead/" />
  </React.Fragment>
);
const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : null;