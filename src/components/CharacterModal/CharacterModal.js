import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import Card from "@material-ui/core/Card"
import CardHeader from "@material-ui/core/CardHeader"
import PropTypes from "prop-types";

class CharacterModal extends Component {
  state = {
    open: false
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { fullScreen } = this.props;
    return (
      <div>
        <Card className="card__size margin">
          <CardHeader title={this.props.data.name}/>
          <img
            src={this.props.data.thumbnail.path + "/standard_fantastic.jpg"}
            alt=""
            onClick={this.handleClickOpen}
          />
        </Card>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="search"
        >
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              x
            </Button>
          </DialogActions>
          <DialogTitle id="searchTitle">{this.props.data.name}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <img
                src={this.props.data.thumbnail.path + "/detail.jpg"}
                alt=""
                classname='maxwidth'
              />
              <h2>Description</h2>
              {this.props.data.description}
            </DialogContentText>
            <a href={this.props.data.urls[0].url}>Link to Marvel Website!</a>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Go Back!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

CharacterModal.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};
export default withMobileDialog()(CharacterModal);
