import React from "react";
import CharacterList from "./CharacterList";
import YoutubeModal from "../YoutubeModal/YoutubeModal";
import axios from "axios";

class Homepage extends React.Component {
  state = {
    movieInfo: ""
  };

  componentDidMount() {
    axios
      .post(this.props.backEndUrl + "/movie", {
        movie: this.props.movieName
      })
      .then(response => this.setState({ movieInfo: response.data }));
  }

  render() {
    if(this.state.movieInfo.dbId){
      return (
        <div>
          <h1>In theaters now!</h1>
          <YoutubeModal
            backEndUrl={this.props.backEndUrl}
            movieInfo={this.state.movieInfo}
          />
          <CharacterList
            backEndUrl={this.props.backEndUrl}
            movieId={this.state.movieInfo.dbId}
          />
        </div>
      );
    } else {
      return null
    }
  }
}

export default Homepage;
