import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';


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


class ChatWidget extends Component {
  componentDidMount() {
    addResponseMessage("Welcome!  I can help you with many tasks, such as creating a filtered list of contacts based on your entered filter parameters.  I can also update, add, and delete lead information in the database.  What would you like to achieve today?");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    //if (newMessage == 'hi' || newMessage == 'hello') {
    //    addResponseMessage('Hi!!!');
    //}

    // this function will just route the message to the backend for processing
    var target_url_base = '/api/chatbot/?q=';
    var target_url = target_url_base.concat(newMessage);
    //var target_request = JSON.stringify({'message': newMessage});

    window.alert = function() {};

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             //alert(this.responseText);
             var serverResponse = this.responseText
             console.log(xhttp.response)
             addResponseMessage(xhttp.response)
         }
    };
    xhttp.open("GET", target_url, true);
    xhttp.send();

    // IMPORTANT! React-Table uses onClick internally to trigger
    // events like expanding SubComponents and pivots.
    // By default a custom 'onClick' handler will override this functionality.
    // If you want to fire the original onClick handler, call the
    // 'handleOriginal' function.
    //if (handleOriginal) {
    //  handleOriginal();
    //}
  }

  render() {
    return (
      <Widget
        subtitle="How can I help?"
        handleNewUserMessage={this.handleNewUserMessage}
      />
    );
  }
}

export default ChatWidget;
