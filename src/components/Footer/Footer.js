import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";

const style = {
  top: "auto",
  bottom: 0,
};
class Footer extends Component {
  render() {
    return (
      <AppBar style={style}>
        <div className="footer flex">
        <div>Data Provided by</div>
        <img className="logo" src="/Assets/MarvelLogo.svg" alt="logo" />
        <img className="logo" src="/Assets/movieDBlogo.svg" alt="logo" />
        <img className="logo" src="/Assets/youtubeLogo.svg" alt="logo" />
        </div>
      </AppBar>
    );
  }
}

export default Footer;
