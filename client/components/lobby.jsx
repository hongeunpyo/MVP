import React from "react";
import Player from "./player";
import Queue from "./queue";
import Chatbox from "./chatbox"
import "../styles/lobby.css"

class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="lobby-container">
          <Player />
          <Queue />
        </div>
        <Chatbox/>
      </>
    );
  }
}

export default Lobby;