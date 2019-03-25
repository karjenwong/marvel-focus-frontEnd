import React, { Component } from "react";
import axios from "axios";
import CharacterModal from "../CharacterModal/CharacterModal";

class Search extends Component {
  state = {
    data: [
      {
        id: "",
        name: "Searching.....",
        description: "",
        thumbnail: {
          path: "http://i.annihil.us/u/prod/marvel/i/mg/6/50/4dd531d26079c"
        },
        urls: [
          {
            url: ""
          }
        ]
      }
    ]
  };

  componentDidMount() {
    axios
      .post("http://localhost:8080/marvel/search", {
        character: this.props.routeProps.searchQuery
      })
      .then(response => {
        this.setState({ data: response.data });
      });
  }

  render() {
    return (
      <div className="flex">
        {this.state.data[0] ? (
          this.state.data.map((result, i) => {
            return (
              <div key={i}>
                <CharacterModal data={result} />
              </div>
            );
          })
        ) : (
          <div>
            <p>
              @.@ We didn't find anything!! Please double-check the spelling of
              {"/" + this.props.routeProps.searchQuery + "/"}.
            </p>
            <p>
              Please note that some characters have a dashes like spider-man and
              can change the results.
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default Search;
