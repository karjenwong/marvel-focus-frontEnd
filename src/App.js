import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import Search from "./components/Search/Search";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Footer/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route
            path="/search/:searchQuery"
            render={routeProps => {
              return <Search routeProps={routeProps.match.params} />;
            }}
          />
          <Route path="/about" component={About} />
        </Switch>
       
      </div>
    );
  }
}

export default App;
