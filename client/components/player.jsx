import React from "react";
import {Howl, Howler} from "howler";
import ReactHowler from "react-howler";
import "../styles/player.css"

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  handlePlay() {
    this.setState({playing: true});
  }
  handleStop() {
    this.setState({playing: false});
  }

  render() {
    return (
      <div className="player-container">
        <ReactHowler
          src='https://s3.amazonaws.com/mvp-music/song1.mp3'
          playing={this.state.playing}
        />
        <div className="player-song-info-container">
          <div className="player-header">Currently Playing</div>
          <img className="player-album-art" src="https://superhypeblog.com/wp-content/uploads/2013/04/Pink-Floyd-Dark-Side-of-the-Moon-2017-billboard-1240-1024x1024.jpg"/>
          <div className="player-artist-name">Pink Floyd</div>
          <div className="player-song-name">Money</div>
        </div>
        <div className="player-controller-container">
          <div className="play" onClick={this.handlePlay}>Play</div>
          <div className="stop" onClick={this.handleStop}>Stop</div>
          <div className="skip">Skip</div>
        </div>
      </div>
    )
  }
}

export default Player;
