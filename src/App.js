import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Search from "./components/Search/Search";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    let backEndUrl =
      "http://ec2-34-222-134-135.us-west-2.compute.amazonaws.com:8080";
    if (process.env.REACT_APP_local) {
      backEndUrl = process.env.REACT_APP_local;
    }
    
    return (
      <div className="App">
        <Navbar />
        <Footer />
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return (
                <Homepage
                  backEndUrl={backEndUrl}
                  movieName={"Captain Marvel"}
                />
              );
            }}
          />
          <Route
            path="/search/:searchQuery"
            render={routeProps => {
              return (
                <Search
                  routeProps={routeProps.match.params}
                  backEndUrl={backEndUrl}
                />
              );
            }}
          />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
