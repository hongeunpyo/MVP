import React from "react"
import {Link} from 'react-router-dom';
import "../styles/header.css"

const Header = (props) => {
  return(
    <div className="nav-bar-container">
      <div className="header">ON.tomo</div>
      <Link to="/">Home</Link>
      <Link to="/lobby-list">Lobby</Link>
    </div>
  )
}

export default Header;