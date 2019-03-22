import React from "react";
import {Link} from 'react-router-dom';
import "../styles/lobbyList.css"
import axios from "axios";

class LobbyList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lobbies: null,
    };
    this.handleSelection = this.handleSelection.bind(this);
    this.getLobbies = this.getLobbies.bind(this);
  }

  componentDidMount() {
    this.getLobbies();
  }

  getLobbies() {
    axios.get("./lobbylist").then((data) => {
      this.setState({lobbies: data.data})
    }).catch((err) => console.log(err));
  }

  populateLobbies() {
    return this.state.lobbies.map((doc) => {
      return (
      <Link className="nostyle" to="/lobby">
        <div className="lobby-entry-container" data-id={doc._id} key={doc._id}>
          <div className="lobby-list-room-container">
            <div className="room-name">Lobby:</div>
            <div className="room-name">{doc.lobby_name}</div>
          </div>
          <div className="lobby-list-player-container">
            <div className="player-info">Currently Playing:</div>
            <div className="player-info">Pink Floyd</div>
            <div className="player-info">Money</div>
          </div>
          <img className="currently-playing-image" src="https://superhypeblog.com/wp-content/uploads/2013/04/Pink-Floyd-Dark-Side-of-the-Moon-2017-billboard-1240-1024x1024.jpg"/>
        </div>
      </Link>
      )
    })
  }

  handleSelection(e) {
    let value = e.target.dataset.id;
    console.log(value);
  }

  render() {
    return (
      <React.Fragment>
      <div className="lobby-list-container">
      <div className="create-lobby-modal">Modal Here</div>
        {/* <Link to="/lobby">
          <div className="lobby-entry-container" onClick={this.handleSelection}>
            <div className="room-name">Test Room</div>
            <div className="player-info">Currently Playing</div>
            <img className="currently-playing-image" src="https://superhypeblog.com/wp-content/uploads/2013/04/Pink-Floyd-Dark-Side-of-the-Moon-2017-billboard-1240-1024x1024.jpg"/>
          </div>
        </Link> */}
        {this.state.lobbies === null ? <span>wait</span> : this.populateLobbies()}
      </div>
      </React.Fragment>
    );
  }
}

export default LobbyList;