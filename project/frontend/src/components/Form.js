import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { withRouter } from "react-router-dom";
import store from './store.js'
import UserForm from './UserForm.js'
import '../../static/css/Form.css';

class Form extends Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };
  state = {
    name: "",
    email: "",
    message: ""
  };
  render() {
    const { name, email, message } = this.state;
    return (
      <section className='MyForm formbody'>
          <Provider store={ store }>
            <UserForm endpoint={ this.props.endpoint }/>
          </Provider>
      </section>
    );
  }
}

export default withRouter(Form);