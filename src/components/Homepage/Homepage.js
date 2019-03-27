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
    if (this.state.movieInfo.dbId) {
      return (
        <div className="margin">
          <div className="movieInfo flex">
            <span className="youtube__container">
              <YoutubeModal
                backEndUrl={this.props.backEndUrl}
                movieInfo={this.state.movieInfo}
              />
              <h3>In theaters {this.state.movieInfo.release_date}</h3>
            </span>

            <div className="overview flex">
              <div>
                <h3>Overview</h3>
                <p className="justify">{this.state.movieInfo.overview}</p>
              </div>
              <img
                src={this.state.movieInfo.backdrop}
                alt="movie backdrop"
                className="backdrop"
              />
              <a
                href={
                  "https://www.cineplex.com/search-2015?search-query=" +
                  this.props.movieName
                }
              >
                Checkout Cineplex for showtimes!
              </a>
            </div>
          </div>
          <CharacterList
            backEndUrl={this.props.backEndUrl}
            movieId={this.state.movieInfo.dbId}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Homepage;
