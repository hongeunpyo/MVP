import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./header";
import Lobby from "./lobby";
import HomePage from "./homePage";
import Footer from "./footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "home",
      lobbyID: null
    };
  }

  // viewRender() {
  //   const {view} = this.state;
  //   if (view === "home") {
  //     return <HomePage/>;
  //   } else if (view === "lobby") {
  //     return <Lobby lobbyID={this.state.lobbyID}/>
  //   }
  // }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/lobby/" component={Lobby}></Route>
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
