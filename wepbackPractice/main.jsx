const React = require("react");
const { Component } = React;

class Main extends Component {
  state = {
    text: "WebPack-Practice",
  };
  render() {
    return <div>{this.state.text}</div>;
  }
}

module.exports = Main;
