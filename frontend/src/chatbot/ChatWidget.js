import React, { Component } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';


class ChatWidget extends Component {
  componentDidMount() {
    addResponseMessage("Welcome!  I can help you with many tasks, such as creating a filtered list of contacts based on your entered filter parameters.  I can also update, add, and delete lead information in the database.  What would you like to achieve today?");
  }

  handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
    addResponseMessage(response);
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
