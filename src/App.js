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
    // const backEndUrl =
    //   "http://ec2-34-222-134-135.us-west-2.compute.amazonaws.com:8080";
    const backEndUrl =
      "http://localhost:8080";

    return (
      <div className="App">
        <Navbar />
        <Footer />
        <Switch>
          <Route
            exact
            path="/"
            render={props => {
              return <Homepage backEndUrl={backEndUrl} />;
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
