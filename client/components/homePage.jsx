import React from "react";
import "../styles/homePage.css"

class HomePage extends React.Component {
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
      <div className="homepage-container">
        {/* <div className="home-main-image"></div> */}
        <img className="home-main-image" src="https://images.pexels.com/photos/1261578/pexels-photo-1261578.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
        <div className="image-overlay-info">Share Music With Friends</div>
      </div>
    );
  }
}

export default HomePage;