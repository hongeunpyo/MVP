import React from "react";
import Player from "./player";

class Lobby extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="lobby-container">Lobby endpoint hit
        <div className="player-container">Player Here
        <Player />
        </div>
        <div className="queue-container">Queue Here</div>
        <div className="chatbox-container">Chatbox Here</div>
      </div>
    );
  }
}

export default Lobby;