import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import ReactPlayer from "react-player";
import VideoCard from "../components/VideoCard";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "./VideoPage.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";

const VideoPage = () => {
  const { id } = useParams();
  const [video, setVideo] = React.useState(null);

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) => {
      console.log("Video Data:", data.items[0]);
      setVideo(data.items[0]);
    });
  }, [id]);

  const { selectedCategory } = useContext(GlobalContext);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(
      `search?part=snippet&q=${selectedCategory}&maxResults=10`
    ).then((data) => {
      setVideos(data.items);
      console.log(data.items);
    });
  }, [selectedCategory]);

  return (
    <div>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        className="react-player"
        controls={true}
        width="100%"
        height="600px"
        playing={true}
        config={{
          youtube: {
            playerVars: {
              showinfo: 1,
              controls: 1,
              modestbranding: 1,
            },
          },
        }}
      />
      <div className="video-details">
        <h2>{video?.snippet?.title}</h2>
        <Link to={`/channel/${video?.snippet?.channelId}`}>
          <p>
            <b>{video?.snippet?.channelTitle}</b>
          </p>
        </Link>
        <p>
          <b>Published At:</b> {formatDate(video?.snippet?.publishedAt)}
        </p>
      </div>
      <div className="feed-videos">
        {videos.length > 0 ? (
          videos.map((video) => (
            <VideoCard
              key={
                video?.id?.videoId ||
                video?.id?.playlistId ||
                video?.id?.channelId ||
                video?.etag
              }
              video={video}
            />
          ))
        ) : (
          <p>No videos available</p>
        )}
      </div>
    </div>
  );
};

export default VideoPage;
