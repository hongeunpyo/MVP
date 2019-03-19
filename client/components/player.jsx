import React from "react";
import {Howl, Howler} from "howler";
import ReactHowler from "react-howler";

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="player-container">
        <ReactHowler
          src='http://goldfirestudios.com/proj/howlerjs/sound.ogg'
          playing={true}
        />
        {/* <div className="play" onClick={this.howlerPlay()}>Play</div> */}
        {/* <div className="stop" onClick={this.howlerPlay()}>Stop</div> */}
      </div>
    )
  }
}

export default Player;
