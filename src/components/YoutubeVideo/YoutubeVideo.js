import React, { Component } from "react";
import axios from "axios";

class youtubeVideo extends Component {
  state = {
    videoURL: "https://www.youtube.com/embed/TcMBFSGVi1c"
  };

  componentDidMount() {
    axios
      .post(this.props.backEndUrl + "/youtube", {
        movie: this.props.movieInfo.movieTitle
      })
      .then(response => {
        const domain = "https://www.youtube.com/embed/";
        console.log(response);
        this.setState({ videoURL: domain + response.data.id.videoId });
      });
  }

  render() {
    return (
      <div className="flex">
        <iframe
          width="560"
          height="315"
          src={this.state.videoURL}
          frameBorder="0"
          title="marvel trailer"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
        />
      </div>
    );
  }
}

export default youtubeVideo;
