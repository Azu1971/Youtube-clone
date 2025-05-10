import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "./Feed.css";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { selectedCategory } = useContext(GlobalContext);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromAPI(
      `search?part=snippet&q=${selectedCategory}&maxResults=25`
    ).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);
  return (
    <div className="feed">
      <h1>{selectedCategory} videos</h1>
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

export default Feed;
