import React, { useRef, useEffect } from "react";



const VideoPlayer = ({ videos, currentVideoIndex, handleVideoEnded }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.addEventListener("ended", handleVideoEnded);
    return () => {
      videoRef.current.removeEventListener("ended", handleVideoEnded);
    };
  }, [handleVideoEnded]);

  useEffect(() => {
    videoRef.current.play();
  }, [currentVideoIndex]);

  return (
   
      <div className="rectan">
        <video
          ref={videoRef}
          src={videos[currentVideoIndex]}
          autoPlay
          muted
          controls={false}
          className="rectan-videos"
        />
      </div>
 
  );
};

export default VideoPlayer;
