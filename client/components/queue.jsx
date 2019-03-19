import React from "react";
import "../styles/queue.css"

class Queue extends React.Component {
  constructor(props) {
    super(props)
    this.state={};
  }
  render() {
    return (
      <div className="queue-container">
        <div className="song-searchbar">
          <form>
            <input className="song-searchbar-input" type="text" placeholder="Search for songs..."/>
          </form>
        </div>
        <div className="song-info-container">
          <img className="queue-album-art" src="https://direct.rhapsody.com/imageserver/images/Alb.330899692/500x500.jpg"/>
          <div className="queue-song-name">Case For You</div>
          <div className="queue-song-artist">Early Eyes</div>
          <div className="votes">0</div>
          <div className="up-vote">^</div>
          <div className="down-vote">v</div>
        </div>
        <div className="song-info-container">
          <img className="queue-album-art" src="https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/JohnMayer_RoomForSquares.jpg/220px-JohnMayer_RoomForSquares.jpg"/>
          <div className="queue-song-name">Your Body is A Wonderland</div>
          <div className="queue-song-artist">John Mayer</div>
          <div className="votes">0</div>
          <div className="up-vote">^</div>
          <div className="down-vote">v</div>
        </div>
      </div>
    )
  }
}

export default Queue;