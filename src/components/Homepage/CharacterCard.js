import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Card from "@material-ui/core/Card";

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
      .post(this.props.backEndUrl + "/marvel", {
        character: this.props.characterInfo.character
      })
      .then(response => {
        if (response.data !== "image not available") {
          this.setState({
            imageAvailable: true,
            data: { ...this.props.characterInfo, ...response.data }
          });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    if (this.state.imageAvailable) {
      const { actor, actor_img, name, thumbnail } = this.state.data;
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
