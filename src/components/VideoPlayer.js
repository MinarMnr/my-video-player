"use client"; // Ensures the component runs on the client side

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

const VideoPlayer = ({ src, resolutions }) => {
  const videoRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const video = videoRef.current;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    let hls;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [src]);
  useEffect(() => {
    const videoElement = document.getElementById("hls-player");

    // Disable right-click context menu
    videoElement.addEventListener("contextmenu", function (event) {
      event.preventDefault();
    });
  }, []);
  const handleResolutionChange = (e) => {
    const newSrc = e.target.value;
    const video = videoRef.current;

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(newSrc);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = newSrc;
    }

    video.currentTime = currentTime;
    video.play();
  };

  return (
    <div>
      <video id="hls-player" ref={videoRef} controls width="50%"></video>
      <div>
        <label>Resolution: </label>
        <select onChange={handleResolutionChange}>
          {resolutions.map((resolution, index) => (
            <option key={index} value={resolution.src}>
              {resolution.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default VideoPlayer;
