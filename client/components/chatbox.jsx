import React from "react";
import "../styles/chatbox.css"

class Chatbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className="chatbox-container">
        <div className="message-header">Chatting in: Lobby Name Here</div>
        <div className="message-container">
          <div className="username">David:</div>
          <div className="message">Sample text</div>
        </div>
        <div className="chatbox-form-container">
          <form className="chatbox-form">
            <input className="chatbox-message-input" type="text" placeholder="Type Here!"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Chatbox;