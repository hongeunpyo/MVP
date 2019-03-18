import React from "react"
import {Link} from 'react-router-dom';
import LobbyList from "./lobbyList";
import "../styles/header.css"

const Header = (props) => {
  return(
    <div className="nav-bar-container">
      <div className="header">ON.tomo</div>
      <Link to="/">Home</Link>
      <LobbyList />
    </div>
  )
}

export default Header;