import React, { Component } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import Paper from "@material-ui/core/Paper";

class CharacterList extends Component {
  state = { characterList: "" };

  componentDidMount() {
    axios
      .post(this.props.backEndUrl + "/movie/character", {
        movieId: this.props.movieId
      })
      .then(response => this.setState({ characterList: response.data }));
  }
  render() {
    let characters = [];
    if (this.state.characterList) {
      characters = this.state.characterList.map((characterInfo, i) => {
        return (
          <CharacterCard
            characterInfo={characterInfo}
            key={i}
            backEndUrl={this.props.backEndUrl}
          />
        );
      });
    }
    console.log();
    return (
      <Paper>
        <h1 className="padding">Movie Characters</h1>
        <div className="flex">{characters}</div>
      </Paper>
    );
  }
}

export default CharacterList;
