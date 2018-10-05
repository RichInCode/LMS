import React from 'react';
import PropTypes from "prop-types";
import { Control, Form, actions } from 'react-redux-form';
import '../../static/css/Form.css';

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

var csrftoken = readCookie('csrftoken');

class UserForm extends React.Component {
  static propTypes = {
    endpoint: PropTypes.string.isRequired
  };
  handleSubmit = e => {
  	console.log(e);
  	console.log(this.props.endpoint);
    const name = e.name;
    const city = e.city;
    const state = e.state;
    const country = e.country;
    const phone = e.phone;
    const title = e.title;
    const email = e.email;
    const message = e.message;
    const lead = { name, email, message, city, state, country, phone, title };
    const conf = {
      method: "post",
      body: JSON.stringify(lead),
      headers: new Headers({ "Content-Type": "application/json", "X-CSRFToken": csrftoken})
    };
    const { resetForm } = this.props;
    fetch(this.props.endpoint, conf).then(response => console.log(response)).then(() => {
    resetForm();});
    alert("Form submitted");
  };
	render() {
		return (
          <div class="formcontainer">
            <Form
                model="user"
                onSubmit={(user) => this.handleSubmit(user)}
            >
            <h1>Please Enter Lead Information Below</h1>
            <hr></hr>
              <section className="contactinfo">
                <h2>Contact Information</h2>
                <div className="field">
                    <label htmlFor="user.name">Name:</label>
                    <Control.text model="user.name" id="user.name" />
                </div>
                <div className="field">
                    <label htmlFor="user.phone">Phone:</label>
                    <Control.text model="user.phone" id="user.phone" />
                </div>
                <div className="field">
                    <label htmlFor="user.email">Email:</label>
                    <Control.text model="user.email" id="user.email" />
                </div>
              </section>
              <section className="businessinfo">
                <h2>Business Information</h2>
                <div className="field">
                    <label htmlFor="user.business">Business:</label>
                    <Control.text model="user.business" id="user.business" />
                </div>
                <div className="field">
                    <label htmlFor="user.title">Title:</label>
                    <Control.text model="user.title" id="user.title" />
                </div>
              </section>
              <section className="locationinfo">
                <h2>Location Information</h2>
                <div className="field">
                    <label htmlFor="user.country">Country:</label>
                    <Control.text model="user.country" id="user.country" />
                </div>
                <div className="field">
                    <label htmlFor="user.state">State/Providence:</label>
                    <Control.text model="user.state" id="user.state" />
                </div>
                <div className="field">
                    <label htmlFor="user.city">City:</label>
                    <Control.text model="user.city" id="user.city" />
                </div>
              </section>
              <section className="extrainfo">
                <h2>Extra Information</h2>
                <div className="field">
                    <label htmlFor="user.message">Comments:</label>
                    <Control.textarea model="user.message" id="user.message" />
                </div>
              </section>
              <section className="buttonsec">
                <button className="mybutton" type="submit">
                    Save Leads
                </button>
                <Control.reset model="user" className="secondary">
                    Clear Values
                </Control.reset>
               </section>
            </Form>
          </div>
		);
	}
}

export default UserForm;