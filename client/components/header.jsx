import React from "react"
import {Link} from 'react-router-dom';
import "../styles/header.css"

const Header = (props) => {
  return(
    <div className="nav-bar-container">
      <div className="header">ON.<span className="sub-header">tomo</span></div>
      <div className="nav-bar-item-container">
        <Link className="nostyle" to="/"><span className="nav-bar-item">Home</span></Link>
        <Link className="nostyle" to="/lobby-list"><span className="nav-bar-item">Lobby List</span></Link>
      </div>
    </div>
  )
}

export default Header;