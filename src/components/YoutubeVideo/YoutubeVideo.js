import React, { Component } from "react";
import axios from "axios";

let url = "http://ec2-34-222-134-135.us-west-2.compute.amazonaws.com:8080/youtube";

class youtubeVideo extends Component {
  state = {
    videoURL: "https://www.youtube.com/embed/TcMBFSGVi1c"
  };

  componentDidMount() {
    axios.get(url).then(response => {
      const domain = "https://www.youtube.com/embed/";
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
