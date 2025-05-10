import React from "react";
import "./VideoCard.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";

const VideoCard = ({ video }) => {
  return (
    <div className="video-card">
      <Link to={`/video/${video?.id?.videoId}`}>
        <img
          src={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
        />
        <p>{video?.snippet?.title}</p>
      </Link>
      <Link to={`/channel/${video?.snippet?.channelId}`}>
        <p className="grey-text">{video?.snippet?.channelTitle}</p>
      </Link>
    </div>
  );
};

export default VideoCard;
