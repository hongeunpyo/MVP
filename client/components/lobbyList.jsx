import React from "react";
import {Link} from 'react-router-dom';
import "../styles/lobbyList.css"

class LobbyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSelection = this.handleSelection.bind(this);
  }

  handleSelection(e) {
    let value = e;
    console.log(value);
  }

  render() {
    return (
      <React.Fragment>
      <div className="lobby-list-container">
      <div className="create-lobby-modal">Modal Here</div>
        <Link to="/lobby">
          <div className="lobby-entry-container">
            <img className="currently-playing-image" src="https://superhypeblog.com/wp-content/uploads/2013/04/Pink-Floyd-Dark-Side-of-the-Moon-2017-billboard-1240-1024x1024.jpg"/>
            <div className="player-info">currentPlaying</div>
            <div className="room-info">roomInfo</div>
          </div>
        </Link>
      </div>
      </React.Fragment>
    );
  }
}

export default LobbyList;