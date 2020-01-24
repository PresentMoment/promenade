import React from "react";
import video from "../assets/rain.mp4";

const BackgroundVideo = () => {
  return (
    <>
      <div className="video">
        <video autoPlay="autoplay" loop="loop">
          <source src={video} type="video/mp4" />
        </video>
      </div>
      <div className="content">
        <h1>R. Girardin - Promenade</h1>
        <h1>Hundebiss Records, Milan</h1>
        <h1>H036</h1>
        <iframe
          title="em"
          style={{
            border: 0,
            width: "520px",
            height: "120px"
          }}
          src="https://bandcamp.com/EmbeddedPlayer/album=2215300614/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
          seamless
        />
      </div>
    </>
  );
};

export default BackgroundVideo;
