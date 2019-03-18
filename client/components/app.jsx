const React = require("react");
const LobbyList = require("./lobbyList");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <div className="nav-bar-container">
          <div className="header">Header</div>
          <LobbyList />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
