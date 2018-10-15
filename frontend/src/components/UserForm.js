import React from 'react';
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { withRouter } from "react-router-dom";
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

  navigateTo(path) {
    if (path !== "") {
        this.props.history.push(path);
    }
  }

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
                <div className="field" style={{width: "100px"}}>
                    <label htmlFor="user.state">State/Providence:</label>
                    <Control.select model="user.state" id="user.state">
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </Control.select>
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
              <section className="buttonsec2">
                <Button className="mybutton" href='/'>
                  Back Home
                </Button>
                <Button className="mybutton" href="/lead/view">
                  View Leads
                </Button>
               </section>
            </Form>
          </div>
		);
	}
}

export default UserForm;