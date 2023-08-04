import React from "react";

const BackgroundVideo = () => {
  const backgroundVideo = "./images/sf-skyscraper2.mp4";
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        className="absolute -z-10 w-screen h-screen object-cover grayscale contrast-75 "
      >
        <source src={backgroundVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
