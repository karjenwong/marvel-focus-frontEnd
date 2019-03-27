import React, { Component } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import withMobileDialog from "@material-ui/core/withMobileDialog";
import PropTypes from "prop-types";

import YoutubeVideo from "../YoutubeVideo/YoutubeVideo";

class YoutubeModal extends Component {
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
      <span>
        <span>
          <img
            className="maxwidth"
            src={this.props.movieInfo.poster}
            alt=""
            onClick={this.handleClickOpen}
          />
        </span>
        <Dialog
          fullScreen={fullScreen}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="search"
          className="test"
        >
          <DialogActions>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Close
            </Button>
          </DialogActions>
          <YoutubeVideo
            backEndUrl={this.props.backEndUrl}
            movieInfo={this.props.movieInfo}
          />
        </Dialog>
      </span>
    );
  }
}

YoutubeModal.propTypes = {
  fullScreen: PropTypes.bool.isRequired
};
export default withMobileDialog()(YoutubeModal);
