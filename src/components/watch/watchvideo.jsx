import React from "react";
import './watchvideo.css'

const Watch = () => {
  return (
    <div className="embed-responsive embed-responsive-16by9 video">
      <iframe
        title="Embeds Page"
        className="embed-responsive-item"
        src="https://www.youtube.com/embed/_4QNyzBl5k0"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Watch;
