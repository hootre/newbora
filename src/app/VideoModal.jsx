import React from "react";
import { Grow } from "@material-ui/core";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

function VideoModal(props) {
  return (
    <div>
      <Grow in={props.isOpen} mountOnEnter unmountOnExit>
        <ModalVideo
          youtube={{ mute: 1, autoplay: 1 }}
          loop="1"
          isOpen={true}
          videoId="nMK6b4CNFl8"
          onClose={props.close}
        />
      </Grow>
    </div>
  );
}

export default VideoModal;
