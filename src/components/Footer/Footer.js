import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";

class Footer extends Component {
  state = {
    timeout: ""
  };

  componentDidMount() {
    setTimeout(() => this.setState({ timeout: "none" }), 3000);
  }

  render() {
    let style = {
      top: "auto",
      bottom: 0,
      display: this.state.timeout
    };

    return (
      <AppBar style={style}>
        <div className="footer flex" onScroll={this.scroll}>
          <div className="clear">Data Provided by</div>
          <img className="logo" src="/Assets/MarvelLogo.svg" alt="logo" />
          <img className="logo" src="/Assets/movieDBlogo.svg" alt="logo" />
          <img className="logo" src="/Assets/youtubeLogo.svg" alt="logo" />
        </div>
      </AppBar>
    );
  }
}

export default Footer;
