import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "@material-ui/core/Card";

let marvelUrl = "http://ec2-34-222-134-135.us-west-2.compute.amazonaws.com:8080/marvel";

class CharacterCard extends Component {
  state = {
    imageAvailable: false,
    data: {
      character: "",
      actor: "",
      actor_img: "",
      description: "",
      name: "",
      thumbnail: "",
      url: ""
    }
  };

  componentDidMount() {
    axios
      .post(marvelUrl, { character: this.props.movieInfo.character })
      .then(response => {
        if (response.data !== "image not available") {
          this.setState({
            imageAvailable: true,
            data: { ...this.props.movieInfo, ...response.data }
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.imageAvailable) {
      const {
        // character,
        actor,
        actor_img,
        // description,
        name,
        thumbnail
        // url
      } = this.state.data;
      return (
        <Card className="margin padding">
          <h4 className="links">
            {actor} <div>as</div> {name}
          </h4>
          <Link to={"/search/" + name}>
            <img className="portrait" src={actor_img} alt="" />
            <img
              className="portrait"
              src={thumbnail + "/portrait_incredible.jpg"}
              alt=""
            />
          </Link>
        </Card>
      );
    } else {
      return null;
    }
  }
}

export default CharacterCard;
