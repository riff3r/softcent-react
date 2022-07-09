import React from "react";
import ReactPlayer from "react-player";
import vplayer from "../Assets/images/video-image.png";

const Video = () => {
  return (
    <section className="video-section">
      {/* <img className="img-fluid" src={vplayer} alt="Video Player" /> */}
      <div className="player-wrapper">
        <ReactPlayer
          className="react-player"
          width="100%"
          height="503px"
          controls
          url="https://youtu.be/zwUsFN__jtE"
        />
      </div>
    </section>
  );
};

export default Video;
