import React, { Component } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import Paper from "@material-ui/core/Paper"

let movieUrl = "http://localhost:8080/movie/character";


class CharacterList extends Component {
  state = { list: "" };

  componentDidMount() {
    axios
      .get(movieUrl)
      .then(response => this.setState({ list: response.data }));
  }

  render() {
    let characters = [];
    if(this.state.list){
      characters = this.state.list.map( movieInfo => {
        return <CharacterCard movieInfo={movieInfo}/>
      })
    }
    return (
      <Paper>
        <h1 className="padding">Movie Characters</h1>
        <div className="flex">{characters}</div>
        
      </Paper>
    );
  }
}

export default CharacterList;
