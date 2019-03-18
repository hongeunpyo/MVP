import React from "react";
import {Link} from 'react-router-dom';

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
      <select className="lobby-bar" onChange={this.handleSelection()}>
        <option value="1">something1</option>
        <option value="2">something2</option>
        <option value="3">something3</option>
      </select>
    );
  }
}

export default LobbyList;